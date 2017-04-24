var swaggerJSDoc = require('swagger-jsdoc');
var express = require('express');
var router = express.Router();

router.use(express.static('swagger'));



var swaggerDefinition = {
  info: {
    title: 'Monster Truck API Service',
    version: '1.0.0',
    description: 'Contains all Api endpints to interact with Monster Truck',
  }
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/**/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/swagger/index.html');
});

router.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});





module.exports = router;
