var ObjectId = require('mongodb').ObjectId;

var listarIntegrante = (app, req, res) => {
    var Integrante = app.src.models.Integrante;
    Integrante.find().exec().then(
        function(data) {

            if (!data) {
                return res.status(404).json({ content: [] });
            }
            if (data) {
                res.json({ status: "OK", content: data });
            }
        },
        function(erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
    );
}

var inserirIntegrante = function(app, req, res) {
    var Integrante = app.src.models.Integrante;
    var dados = req.body;

    Integrante.collection.insert(dados, function(err, data) {
        if (data) {
            return res.status(200).json({ status: "OK", content: { '_id': dados._id } });
        }
        return res.status(500).json(err);
    });

}

var selecionarIntegrantePorId = function(app, req, res) {

    var id = req.params.id;
    var Integrante = app.src.models.Integrante;
    Integrante.collection.findOne({ _id: new ObjectId(id) }, function(err, data) {
        if (!data) {
            return res.status(404).json({ content: [] });
        }

        if (data) {
            return res.status(200).json({ content: data });
        }

        return res.status(500).json(err);
    });
}

var excluirIntegrante = function(app, req, res) {
    var id = req.params.id;
    var Integrante = app.src.models.Integrante;
    Integrante.collection.remove({ _id: new ObjectId(id) }, function(err, data) {

        if (data) {
            return res.status(200).json({ content: { status: "OK", message: "Excluido com sucesso" } });
        }

        return res.status(500).json(err);
    });
}

module.exports = {
    listarIntegrante,
    selecionarIntegrantePorId,
    inserirIntegrante,
    excluirIntegrante
}