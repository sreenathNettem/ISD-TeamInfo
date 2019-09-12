/**
 * Main application routes
 */

'use strict';
var bodyParser = require('body-parser');
var config = require('config');
var request = require('request');
var noAuthentication = config.get('ibmsso.noAuthentication');
var env = config.get('env');
var apiUrl = config.get('apis.apiUrl');
var jwt = require('jsonwebtoken');
var accessHubApiUrl = config.get('apis.accessHubApiUrl');
var appStorage = require('./appStorage');

// var CryptoJS = require("crypto-js");

// Decrypt
// var bytes  = CryptoJS.AES.decrypt('U2FsdGVkX1+rf4wEwB8Es95zsF6qlSPlR6zkTgVIAiksJO7Rgt/yxhHP6fvkW4Ny6IZbxLRaPMUtCFLD/AVXxria45egXjkd5ePH+Yvq98P7VuqxX3wIOmcS9w5ts6QZ', 'myPassword');
// var plaintext = bytes.toString(CryptoJS.enc.Utf8);
// console.log(plaintext, 'plaintext');

// import * as CryptoJS from 'crypto-js';
// // INIT
// var myString = "firstName=Swamy,email=sputsa10@in.ibm.com&LastName=Swamy Kumar&uid=12121";
// var myPassword = "myPassword";

// // PROCESS
// var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
// var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
// alert(encrypted);
// alert(decrypted);

// console.log(myString)
// console.log(encrypted)
// console.log(decrypted)
// console.log(decrypted.toString(CryptoJS.enc.Utf8))

if (noAuthentication) {
    console.log('Running with no authentication checking');
}

module.exports = function (app) {
    function ensureAuthenticated(req, res, next) {
        if (noAuthentication) {
            return next();
        } else {
            if (req.isAuthenticated()) {
                if (req.user == null) {
                    console.log('user is null');
                }
                return next();
            } else {
                if (req.headers['x-requested-with'] == 'XMLHttpRequest') {
                    res.status(401).send({
                        error: 'The user is not authenticated',
                    });
                } else {
                    res.redirect(env + '/login');
                }
            }
        }
    }

    app.enable('trust proxy', 1);

    app.use(function (req, res, next) {
        if (req.secure) {
            next();
        } else {
            res.redirect('https://' + req.headers.host + env + req.url);
        }
    });

    app.get('/', ensureAuthenticated, function (req, res, next) {
          const userDetails = {
            email: req.user.id,
            uid: req.user._json.uid,
            firstName: req.user._json.firstName,
            lastName: req.user._json.lastName,
            role: 'admin'
        };
        console.log(req.user);
        res.send(JSON.stringify(userDetails));
    });


    // parse application/x-www-form-urlencoded
    app.use(
        bodyParser.urlencoded({
            extended: true,
        }),
    );

    // parse application/json
    app.use(bodyParser.json());


    app.get('/mobile/*', function (req, res) {

        if (req.headers.email && req.headers.firstname && req.headers.lastname && req.headers.uid) {

            var requestEndPoint = req.path.split('/mobile');
            var secret = config.apis.CEDPApi.secretKey;

            const requestId = req.headers.uid + Math.random().toString(36).toUpperCase().substring(2, 15) + Math.random().toString(36).toUpperCase().substring(2, 15);

            var access_token = jwt.sign({
                id: req.headers.email,
                user: req.headers.firstName,
                email: req.headers.email,
                uid: req.headers.uid,
                token: secret,
            },
                config.apis.CEDPApi.SignatureKey, {
                    expiresIn: '2m', // expires in 2 minutes
                });


            request.get({
                rejectUnauthorized: false,
                url: apiUrl + requestEndPoint[1],
                qs: req.query,
                useQuerystring: true,
                headers: {
                    Authorization: 'Bearer ' + access_token,
                    userId: requestId
                },
            },
                function (error, response, body) {
                    if (error || response.statusCode != 200) {
                        console.error(
                            'Error, can not call backend services. Error: ' + error,
                        );
                        res.send('Error, can not call backend services. Error: ' + error);
                    } else {
                        res.send(body);
                    }
                },
            );
        }
    });

    app.get('/getUserPicture', function (req, res) {

        if (req.headers.uid) {

            request.get({
                url: config.get('w3.pictureURL') + req.headers.uid,
                headers: { 'x-ibm-client-id': config.get('w3.xclientid') },
                encoding: null,
            },
                function (error, response, body) {
                    if (error || response.statusCode != 200) {
                        console.error(error);
                        res.status(500);
                        res.send(error);
                    } else {
                        res.send({
                            img: new Buffer(body).toString('base64'),
                        });
                    }
                },
            );

        }

    });

    app.get('/getAccessHubData', function (req, res) {
        var secret = config.apis.CEDPApi.secretKey;
        var access_token = jwt.sign({
                id: req.headers.email,
                user: req.headers.firstName,
                email: req.headers.email,
                uid: req.headers.uid,
                token: secret,
            },
            config.apis.CEDPApi.SignatureKey, {
                expiresIn: '2m',
            },
        );
        const options = {
            url: accessHubApiUrl,
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Accept-Charset': 'utf-8',
                userId: req.headers.uid,
                Authorization: 'Bearer ' + access_token
            },
        };

        request(options, function (error, response, body) {
            if (!error) {
                res.send(body);
            }
        }).on('error', function (err) {
            console.log(err);
        });
    });

    app.get('/getUserRatings/', function (req, res) {  
        appStorage.getUserRatings(
            function (data) {
                res.send(data);
            },
            function (error) {
                res.send('Error: ' + error);
            },
        );
    });

    app.post('/saveUserRating/', function (req, res) {  
        var user_rating = [req.headers.email,req.body.user_rating,req.body.user_project,req.body.user_team,req.body.user_comment];
        appStorage.saveUserRating(
            user_rating,
            function (data) {
                res.send(data);
            },
            function (error) {
                res.send('Error: ' + error);
            },
        );
    });

    app.get('/getUserRatingsByDate/', function (req, res) {  
        var user_rating = [req.query.user_project,req.query.user_team];
        appStorage.getUserRatingsByDate(
            user_rating,
            function (data) {
                res.send(data);
            },
            function (error) {
                res.send('Error: ' + error);
            },
        );
    });
    
    app.get('/getAllUserRatings/', function (req, res) {  
        appStorage.getAllUserRatings(
            function (data) {
                res.send(data);
            },
            function (error) {
                res.send('Error: ' + error);
            },
        );
    });

}