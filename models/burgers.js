const orm = require('./config/orm');

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },

    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){  
            cb(res);
        });
    },

    update: updateOne(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        })
    }
}