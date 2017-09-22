var controller = require('../controllers/integrante');

module.exports = function(application) {
    application.get('/integrante', function(req, res) {
        controller.listarIntegrante(application, req, res);
    });

    application.post('/integrante', function(req, res) {
        controller.inserirIntegrante(application, req, res);
    });

    application.get('/integrante/:id', function(req, res) {
        controller.selecionarIntegrantePorId(application, req, res);
    });

    application.delete('/integrante/:id', function(req, res) {
        controller.excluirIntegrante(application, req, res);
    });

}