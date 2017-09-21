var listarIntegrante = (app, req, res) => {
    var model = app.controllers.genericDAO;

    model.list(app, req, res, app.models.Integrante);
}

var inserirIntegrante = function(app, req, res) {
    var model = app.controllers.genericDAO;

    model.insert(app, req, res, app.models.Integrante);
}

var selecionarPorId = function(app, req, res) {
    var model = app.controllers.genericDAO;

    model.getById(app, req, res, app.models.Integrante);
}

module.exports = {
    listarIntegrante,
    inserirIntegrante,
    selecionarPorId
}