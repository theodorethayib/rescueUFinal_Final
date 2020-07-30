/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// make path and router thing
const path = require('path');
const router = express.Router();

// web pages
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/gethelp',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/resources',function(req,res){
  res.sendFile(path.join(__dirname+'/resources.html'));
});

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// set the port number based on the environment variable,
// if it exists. Otherwise, use port 6006.
var port = cfenv.getAppEnv() || 6006;

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
