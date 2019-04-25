// 实现与MySQL交互
var mysql = require('mysql');
var dbconf = require('../conf/db');
var _ = require('lodash');
var sql = require('../sql/user');
var utils = require('../public/javascripts/utils')

// 使用连接池，提升性能
var pool  = mysql.createPool(_.extend({}, dbconf.mysql));


module.exports = {
	add: function (param, res, next,callbackResponse) {

		pool.getConnection(function(err, connection) {
			var hash = utils.hash()
console.log("pool"+JSON.stringify(param))
 
			// 建立连接，向表中插入值
			connection.query(sql.insert, [hash, param.name, param.sex, param.age, param.avator], function(err, result) {
				console.log("connection"+JSON.stringify(param))
				if(result) {
					result = {
						code: 200,
						msg:'增加成功'
					};    
				}
 
				// 以json形式，把操作结果返回给前台页面
				callbackResponse(res, result);
 
				// 释放连接 
				connection.release();
			});
		});
    }
}