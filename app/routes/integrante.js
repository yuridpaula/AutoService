module.exports = function(app) {

    var controller = app.controllers.integrante;

    app.get('/integrante', function(req, res) {
        controller.listarIntegrante(app, req, res);
    });

    app.post('/integrante', function(req, res) {
        controller.inserirIntegrante(app, req, res);
    });

}