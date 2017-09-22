var listarMovimento = function(app, req, res) {
    var model = app.controllers.genericDAO;

    model.list(app, req, res, app.models.Movimento);
}

var inserirMovimento = function(app, req, res) {
    var model = app.controllers.genericDAO;

    model.insert(app, req, res, app.models.Movimento);
}

var selecionarPorId = function(app, req, res) {
    var model = app.controllers.genericDAO;

    model.getById(app, req, res, app.models.Movimento);
}

module.exports = {
    listarMovimento,
    inserirMovimento,
    selecionarPorId
}