module.exports = function(app) {

    var controller = app.app.controllers.movimento;

    app.get('/movimento', function(req, res) {
        controller.listarmovimento(app, req, res);
    });

    app.post('/movimento', function(req, res) {
        controller.inserirmovimento(app, req, res);
    });

}