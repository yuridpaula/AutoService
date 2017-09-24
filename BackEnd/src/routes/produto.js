var controller = require('../controllers/produto');

module.exports = function(application) {
    application.get('/produto', function(req, res) {
        controller.listarProduto(application, req, res);
    });

    application.post('/produto', function(req, res) {
        controller.inserirProduto(application, req, res);
    });

    application.get('/produto/:id', function(req, res) {
        controller.selecionarProdutoPorId(application, req, res);
    });

    application.delete('/produto/:id', function(req, res) {
        controller.excluirProduto(application, req, res);
    });

}