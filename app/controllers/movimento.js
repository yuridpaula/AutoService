var listarMovimento = (app, req, res) => {
    var Movimento = app.models.Movimento;
    Movimento.find().exec().then(
        function(Movimento) {
            res.json(Movimento);
        },
        function(erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
    );
}

var inserirMovimento = function(app, req, res) {
    var Movimento = app.models.Movimento;
    var dados = req.body;

    Movimento.collection.insert(dados, function(err, data) {
        if (data) {
            return res.status(200).json({ 'status': 'OK', "id": dados._id });
        }
        return res.json(err);
    });

}

var selecionarPorId = function(app, req, res) {
    var id = req.params.id;
    var Movimento = app.models.Movimento;
    Movimento.collection.find(id, function(err, data) {
        if (data) {
            return res.status(200).json(data);
        }
    });


}

module.exports = {
    listarMovimento,
    inserirMovimento,
    selecionarPorId
}