var express = require('express');
var router = express.Router();

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
    res.send({"name":"Monster Truck","controllType":"Wify"});
});

module.exports = router;
