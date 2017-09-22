module.exports = function(app){
    var User = app.models.User;
    var controller = {};

    controller.create = function(req, res) {};
    controller.find_all = function(req, res) {};
    controller.find_one = function(req, res) {};
    controller.update_all = function(req, res) {};
    controller.update_one = function(req, res) {};
    controller.delete_all = function(req, res) {};
    controller.delete_one = function(req, res) {};

    return controller;
};
