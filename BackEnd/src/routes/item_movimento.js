var controller = require('../controllers/item_movimento');

module.exports = function(application) {
    application.get('/movimento_itens', function(req, res) {
        controller.listarItemMovimento(application, req, res);
    });

    application.post('/movimento_itens', function(req, res) {
        controller.inserirItemMovimento(application, req, res);
    });

    application.delete('/movimento_itens/:id', function(req, res) {
        controller.excluirItemMovimento(application, req, res);
    });

    application.get('/movimento_itens/itens/:id', function(req, res) {
        controller.listarItemIdCabMovimento(application, req, res);
    });

    application.put('/movimento_itens', function(req, res) {
        controller.atualizarItemMovimento(application, req, res);
    });

}