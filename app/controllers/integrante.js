var listarIntegrante = (app, req, res) => {
    var Integrante = app.app.models.Integrante;
    Integrante.find().exec().then(
        function(integrante) {
            res.json(integrante);
        },
        function(erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
    );
}

var inserirIntegrante = function(app, req, res) {
    var Integrante = app.app.models.Integrante;
    var dados = req.body;

    Integrante.collection.insert(dados, function(err, data) {
        if (data) {
            return res.status(200).json({ 'status': 'OK', "id": dados._id });
        }
        return res.json(err);
    });

}

var selecionarPorId = function(app, req, res) {
    var id = req.params.id;
    var Integrante = app.app.models.Integrante;
    Integrante.collection.find(id, function(err, data) {
        if (data) {
            return res.status(200).json(data);
        }
    });


}

module.exports = {
    listarIntegrante,
    inserirIntegrante,
    selecionarPorId
}