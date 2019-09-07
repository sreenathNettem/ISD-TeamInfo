require('dotenv').config({
  path: process.cwd() + "/server/config/.env"
});
// console.log(process.env.NODE_CONFIG_DIR);
var express = require('express');
var cfenv = require('cfenv');
var config = require('config');
var fs = require('fs');
var https = require('https');
const cors = require('cors');
var helmet = require('helmet')
var compression = require('compression');

// create a new express server
var app = express();
app.use(cors());
app.use(helmet())

app.use(compression({
  "level": 9
}));

require('./auth')(app);

var appEnv = cfenv.getAppEnv();
var appPort = config.get('nodejs.port') || appEnv.port;
var appHttpsPort = config.get('nodejs.httpsPort') || appEnv.httpsPort;
console.log("Running in '" + process.env.NODE_ENV + "' mode!");
app.listen(appPort, '0.0.0.0', function () {
  console.log('Express server listening on port ' + appPort);
});

if (appEnv.isLocal) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  var options = {
    key: fs.readFileSync(__dirname + '/config/certs/private.key'),
    cert: fs.readFileSync(__dirname + '/config/certs/certificate.pem')
  };
  var secureServer = https.createServer(options, app).listen(appHttpsPort);
  console.log('Express server https listening on port ' + appHttpsPort);

}

require('./routes')(app);
app.use(express.static(__dirname + '/public/src'));
