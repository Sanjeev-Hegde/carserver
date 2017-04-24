var express = require('express');
var router = express.Router();

router.use('/test', require("./routes/test.js"));

module.exports = router;
