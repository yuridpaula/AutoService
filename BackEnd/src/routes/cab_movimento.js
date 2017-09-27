var controller = require('../controllers/cab_movimento');

module.exports = function(application) {
    application.get('/movimento', function(req, res) {
        controller.listarMovimento(application, req, res);
    });

    application.post('/movimento', function(req, res) {
        controller.inserirMovimento(application, req, res);
    });

    application.get('/movimento/:id', function(req, res) {
        controller.selecionarMovimentoPorId(application, req, res);
    });

    application.delete('/movimento/:id', function(req, res) {
        controller.excluirMovimento(application, req, res);
    });

}