module.exports = function(app) {
    var controller = app.app.controllers.integrante;

    app.get('/integrante', function(req, res) {
        controller.listarIntegrante(app, req, res);
    });

    app.post('/integrante', function(req, res) {
        console.log("entrou na rota" + req.body);
        integranteModel = app.app.models.Integrante;

        integranteModel.collection.insert(dados, function(err, data) {
            if (data) {
                return res.status(200).json({ 'status': 'OK', "id": dados._id });
            }
            return res.json(err);
        });

    });

}