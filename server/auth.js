require('./routes')
module.exports = function (app, req, res, next) {
  var bodyParser = require('body-parser');
  var cookieParser = require('cookie-parser');
  var OpenIDConnectStrategy = require('passport-idaas-openidconnect').IDaaSOIDCStrategy;
  var passport = require('passport');
  var expressSession = require('express-session');
  var config = require('config');
  var env = config.get('env');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(cookieParser('oihnbdbaskvioijnasdiohnliukmd'));
  app.use(expressSession({
    secret: 'oihnbdbaskvioijnasdiohnliukmd',
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  var Strategy = new OpenIDConnectStrategy({
    authorizationURL: config.get('ibmsso.authorizationURL'),
    tokenURL: config.get('ibmsso.tokenURL'),
    clientID: config.get('ibmsso.clientID'),
    scope: config.get('ibmsso.scope'),
    response_type: config.get('ibmsso.responseType'),
    clientSecret: config.get('ibmsso.clientSecret'),
    callbackURL: env + config.get('ibmsso.callbackURL'),
    skipUserProfile: config.get('ibmsso.skipUserProfile'),
    issuer: config.get('ibmsso.issuer'),
    addCACert: config.get('ibmsso.addCACert'),
    CACertPathList: config.get('ibmsso.CACertPathList'),
    passReqToCallback: config.get('ibmsso.passReqToCallback')
  },
    // This is the verify callback
    function (req, iss, sub, profile, accessToken, refreshToken, params, done) {
      process.nextTick(function () {
        profile.accessToken = accessToken;
        profile.refreshToken = refreshToken;
        done(null, profile);
      })
    });
  passport.use(Strategy);

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  app.get('/login', function (req, res, next) {
    passport.authenticate('openidconnect', { failureRedirect: env + '/error' })(req, res, next);
  });

  app.get('/logout', function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.send('loggedout');
  });

  app.get('/oidcstrategyweb', passport.authenticate('openidconnect', { failureRedirect: env + '/error' }),
    function (req, res, next) {
      res.redirect('/');
    });

}
