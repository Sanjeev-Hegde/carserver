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

gpio.setup(11, gpio.DIR_OUT, write);

function write() {
    gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}
    res.send({"name":"Monster Truck","controllType":"Wify"});
});

module.exports = router;
