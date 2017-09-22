var ObjectId = require('mongodb').ObjectId;

var listarMovimento = (app, req, res) => {
    var Movimento = app.src.models.Movimento;
    Movimento.find().exec().then(
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

var inserirMovimento = function(app, req, res) {
    var Movimento = app.src.models.Movimento;
    var dados = req.body;

    Movimento.collection.insert(dados, function(err, data) {
        if (data) {
            return res.status(200).json({ status: "OK", content: { '_id': dados._id } });
        }
        return res.status(500).json(err);
    });

}

var selecionarMovimentoPorId = function(app, req, res) {

    var id = req.params.id;
    var Movimento = app.src.models.Movimento;
    Movimento.collection.findOne({ _id: new ObjectId(id) }, function(err, data) {
        if (!data) {
            return res.status(404).json({ content: [] });
        }

        if (data) {
            return res.status(200).json({ content: data });
        }

        return res.status(500).json(err);
    });
}

var excluirMovimento = function(app, req, res) {
    var id = req.params.id;
    var Movimento = app.src.models.Movimento;
    Movimento.collection.remove({ _id: new ObjectId(id) }, function(err, data) {

        if (data) {
            return res.status(200).json({ content: { status: "OK", message: "Excluido com sucesso" } });
        }

        return res.status(500).json(err);
    });
}

module.exports = {
    listarMovimento,
    selecionarMovimentoPorId,
    inserirMovimento,
    excluirMovimento
}