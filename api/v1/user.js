var express = require('express');
var router = express.Router();

var curdUser = require('../../crud/user');

/* */
router.post('/', function (req, res, next) {
    console.log(req.body)

    // 获取前台页面传过来的参数
    var param = req.body;

    
    // 向前台返回JSON方法的简单封装
    var jsonWrite = function (res, ret) {
        if(typeof ret === 'undefined') {
            res.json({
                code:'1',
                msg: '操作失败'
            });
        } else {
            res.json(ret);
        }
    };

    

    curdUser.add(param,res,next,jsonWrite)

});

module.exports = router;