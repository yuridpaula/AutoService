module.exports = function(app) {

    var controller = app.controllers.produto;

    app.get('/produto', function(req, res) {
        controller.listarproduto(app, req, res);
    });

    app.post('/produto', function(req, res) {
        controller.inserirproduto(app, req, res);
    });

}