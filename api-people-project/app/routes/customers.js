module.exports = function (app) {
    var controller = app.controllers.customers;

    app.post('/customers', controller.create);
    app.get('/customers', controller.find_all);
    app.get('/customers/:id', controller.find_one);
    app.put('/customers', controller.update_all);
    app.put('/customers/:id', controller.update_one);
    app.delete('/customers', controller.delete_all);
    app.delete('/customers/:id', controller.delete_one);

    return app;
};