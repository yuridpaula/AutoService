var controller = require('../controllers/produto');

module.exports = function(application) {
    application.get('/produtos', function(req, res) {
        controller.listarProduto(application, req, res);
    });

    application.post('/produtos', function(req, res) {
        controller.inserirProduto(application, req, res);
    });

    application.get('/produtos/:id', function(req, res) {
        controller.selecionarProdutoPorId(application, req, res);
    });

    application.delete('/produtos/:id', function(req, res) {
        controller.excluirProduto(application, req, res);
    });

    application.put('/produtos', function(req, res) {
        controller.atualizarProduto(application, req, res);
    });
}