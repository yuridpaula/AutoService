var controller = require('../controllers/cab_movimento');

module.exports = function(application) {
    application.get('/movimentos', function(req, res) {
        controller.listarMovimento(application, req, res);
    });

    application.post('/movimentos', function(req, res) {
        controller.inserirMovimento(application, req, res);
    });

    application.get('/movimentos/:id', function(req, res) {
        controller.selecionarMovimentoPorId(application, req, res);
    });

    application.delete('/movimentos/:id', function(req, res) {
        controller.excluirMovimento(application, req, res);
    });

    application.put('/movimentos', function(req, res) {
        controller.atualizarMovimento(application, req, res);
    });

}