var controller = require('../controllers/item_movimento');

module.exports = function(application) {
    application.get('/item_movimento', function(req, res) {
        controller.listarItemMovimento(application, req, res);
    });

    application.post('/item_movimento', function(req, res) {
        controller.inserirItemMovimento(application, req, res);
    });

    application.delete('/item_movimento/:id', function(req, res) {
        controller.excluirItemMovimento(application, req, res);
    });

}