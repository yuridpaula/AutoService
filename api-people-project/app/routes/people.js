module.exports = function(app) {
    var controller = app.controllers.people;

    app.post('/people', controller.create);
    app.get('/people', controller.find_all);
    app.get('/people/:id', controller.find_one);
    app.put('/people', controller.update_all);
    app.put('/people/:id', controller.update_one);
    app.delete('/people', controller.delete_all);
    app.delete('/people/:id', controller.delete_one);

    return app;
};