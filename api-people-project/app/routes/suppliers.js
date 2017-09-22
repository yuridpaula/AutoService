module.exports = function (app) {
    var controller = app.controllers.suppliers;

    app.post('/suppliers', controller.create);
    app.get('/suppliers', controller.find_all);
    app.get('/suppliers/:id', controller.find_one);
    app.put('/suppliers', controller.update_all);
    app.put('/suppliers/:id', controller.update_one);
    app.delete('/suppliers', controller.delete_all);
    app.delete('/suppliers/:id', controller.delete_one);

    return app;
};