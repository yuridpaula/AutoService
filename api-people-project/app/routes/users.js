module.exports = function (app) {
    var controller = app.controllers.users;

    app.post('/users', controller.create);
    app.get('/users', controller.find_all);
    app.get('/users/:id', controller.find_one);
    app.put('/users', controller.update_all);
    app.put('/users/:id', controller.update_one);
    app.delete('/users', controller.delete_all);
    app.delete('/users/:id', controller.delete_one);

    return app;
};