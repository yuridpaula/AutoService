var listarProduto = function(app, req, res) {
    var model = app.controllers.genericDAO;

    model.list(app, req, res, app.models.Produto);
}

var inserirProduto = function(app, req, res) {
    var model = app.controllers.genericDAO;

    model.insert(app, req, res, app.models.Produto);
}

var selecionarPorId = function(app, req, res) {
    var model = app.controllers.genericDAO;

    model.getById(app, req, res, app.models.Produto);
}

module.exports = {
    listarProduto,
    inserirProduto,
    selecionarPorId
}