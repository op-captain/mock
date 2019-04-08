var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user/:id', function(req, res, next) {
    res.send(req.query)
    console.log(req.query)
});

module.exports = router;