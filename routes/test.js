var express = require('express');
var router = express.Router();
var gpio = require('rpi-gpio');

/**
 * @swagger
 * /truck_api/test/get_car_details:
 *   get:
 *     tags:
 *       - Monster Truck
 *     description: Returns Information about Car'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Information about Car
 *
 */
router.get('/get_car_details', function(req, res, next) {

//   gpio.setup(7, gpio.DIR_IN, readInput);
//
// function readInput() {
//   gpio.read(7, function(err, value) {
//       console.log('The value is ' + value);
//   });
// }

gpio.setup(13, gpio.DIR_OUT, write);

function write() {
    gpio.write(13, true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}
    res.send({"name":"Monster Truck","controllType":"Wify"});
});



/**
 * @swagger
 * /truck_api/test/move_forward:
 *   get:
 *     tags:
 *       - Monster Truck
 *     description: Moves the car forward'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Moves the car forward
 *
 */
router.get('/move_forward', function(req, res, next) {

      gpio.setup(3, gpio.DIR_OUT, function write() {
          gpio.write(3, true, function(err) {
              if (err) throw err;
              console.log('Moving Forward');
          });
      });

    res.send({"action":"Moving Forward"});
});
/**
 * @swagger
 * /truck_api/test/move_backward:
 *   get:
 *     tags:
 *       - Monster Truck
 *     description: Moves the car backward'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Moves the car backward
 *
 */
router.get('/move_backward', function(req, res, next) {

    gpio.setup(5, gpio.DIR_OUT, function write() {
        gpio.write(5, true, function(err) {
            if (err) throw err;
            console.log('Moving Backward');
        });
    });
    res.send({"action":"Moving Backward"});
});
/**
 * @swagger
 * /truck_api/test/stop_vertical_movement:
 *   get:
 *     tags:
 *       - Monster Truck
 *     description: Stops the vertical movement of car'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Stops the vertical movement of car
 *
 */
router.get('/stop_vertical_movement', function(req, res, next) {

    gpio.setup(3, gpio.DIR_OUT, function write() {
        gpio.write(3, false, function(err) {
            if (err) throw err;
        });
    });
    gpio.setup(5, gpio.DIR_OUT, function write() {
        gpio.write(5, false, function(err) {
            if (err) throw err;
        });
    });
    console.log('Vertical Movement Stopped');
    res.send({"action":"Vertical Movement Stopped"});
});


/**
 * @swagger
 * /truck_api/test/move_right:
 *   get:
 *     tags:
 *       - Monster Truck
 *     description: Moves the car right'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Moves the car right
 *
 */
router.get('/move_right', function(req, res, next) {

    gpio.setup(7, gpio.DIR_OUT, function write() {
        gpio.write(7, true, function(err) {
            if (err) throw err;
            console.log('Moving Right');
        });
    });
    res.send({"action":"Moving Right"});
});
/**
 * @swagger
 * /truck_api/test/move_left:
 *   get:
 *     tags:
 *       - Monster Truck
 *     description: Moves the car left'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Moves the car left
 *
 */
router.get('/move_left', function(req, res, next) {

    gpio.setup(11, gpio.DIR_OUT, function write() {
        gpio.write(11, true, function(err) {
            if (err) throw err;
            console.log('Moving Left');
        });
    });
    res.send({"action":"Moving Left"});
});
/**
 * @swagger
 * /truck_api/test/stop_horizontal_movement:
 *   get:
 *     tags:
 *       - Monster Truck
 *     description: Stops the horizontal movement of car'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Stops the horizontal movement of car
 *
 */
router.get('/stop_horizontal_movement', function(req, res, next) {

    gpio.setup(7, gpio.DIR_OUT, function write() {
        gpio.write(7, false, function(err) {
            if (err) throw err;
        });
    });
    gpio.setup(11, gpio.DIR_OUT, function write() {
        gpio.write(11, false, function(err) {
            if (err) throw err;
        });
    });
    console.log('Horizontal Movement Stopped');
    res.send({"action":"Horizontal Movement Stopped"});
});

module.exports = router;
