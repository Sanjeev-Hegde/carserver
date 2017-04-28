var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var logger = require('morgan');
var app = express();
var helmet = require('helmet');
var http = require('http');
//require('dotenv').config();

app.use(cors());
app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var swagger = require("./swagger.js");
app.use('/swagger', swagger);

// var api_Key_validator = function (req, res, next) {
//   //console.log(process.env.Mercury_Api_Key);
//   //console.log(req.headers.api_key);
//   if((req.headers.api_key != process.env.Api_Key)&&(req.query.Api_Key!='')){
// 	 res.status(500).send("Not Authorized. Invalid Api Key");
//   }
//   else
//   next();
// };
// planning to use this to add this in future
//app.use(api_Key_validator);
app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
});

var routes = require("./routes.js");
app.use('/truck_api', routes);

var server = http.createServer(app);
server = require('http-shutdown')(server);
server.listen(3344,function () {
    console.log("Listening on port %s...", server.address().port);
});
process.on('uncaughtException', function (exception) {
   // handle or ignore error
   console.log(exception);
});
process.on('SIGINT', function() {
  server.shutdown(function() {
    console.log('Everything is cleanly shutdown.');
    process.exit();
  });
});

/*var server = app.listen(3344, function () {
    console.log("Listening on port %s...", server.address().port);
});
*/
