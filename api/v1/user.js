var express = require('express');
var router = express.Router();

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

/* GET home page. */
router.post('/', function (req, res, next) {
    //res.send(req.query)
    // let course = courses.find(
    //     courses => courses.id == parseInt(req.params.id)
    // );
    res.send('成功');
});

module.exports = router;