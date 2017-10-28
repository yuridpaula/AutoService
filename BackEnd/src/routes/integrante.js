var controller = require('../controllers/integrante');

module.exports = function(application) {
    application.get('/integrantes', function(req, res) {
        controller.listarIntegrante(application, req, res);
    });

    application.post('/integrantes', function(req, res) {
        controller.inserirIntegrante(application, req, res);
    });

    application.get('/integrantes/:id', function(req, res) {
        controller.selecionarIntegrantePorId(application, req, res);
    });

    application.delete('/integrantes/:id', function(req, res) {
        controller.excluirIntegrante(application, req, res);
    });

    application.put('/integrantes', function(req, res) {
        controller.atualizarIntegrante(application, req, res);
    });

}