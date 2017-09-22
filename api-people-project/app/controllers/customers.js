module.exports = function(app){
    var Customer = app.models.Customer;
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
