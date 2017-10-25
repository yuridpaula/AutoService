var ObjectId = require('mongodb').ObjectId;

var listarMovimento = (app, req, res) => {
    var Movimento = app.src.models.Cab_movimento;
    Movimento.find().exec().then(
        function(data) {

            if (!data) {
                return res.status(404).json({ content: [] });
            }
            if (data) {
                res.json(data);
            }
        },
        function(erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
    );
}

var inserirMovimento = function(app, req, res) {
    var Movimento = app.src.models.Cab_movimento;
    var dados = req.body;

    Movimento.collection.insert(dados, function(err, data) {
        if (data) {
            return res.status(200).json(dados._id);
        }
        return res.status(500).json(err);
    });

}

var selecionarMovimentoPorId = function(app, req, res) {

    var id = req.params.id;
    var Movimento = app.src.models.Cab_movimento;
    Movimento.collection.findOne({ _id: new ObjectId(id) }, function(err, data) {
        if (!data) {
            return res.status(404).json({ content: [] });
        }

        if (data) {
            return res.status(200).json(data);
        }

        return res.status(500).json(err);
    });
}

var excluirMovimento = function(app, req, res) {
    var id = req.params.id;
    var Movimento = app.src.models.Cab_movimento;
    Movimento.collection.remove({ _id: new ObjectId(id) }, function(err, data) {

        if (data) {
            return res.status(200).json({ content: { status: "OK", message: "Excluido com sucesso" } });
        }

        return res.status(500).json(err);
    });
}


var atualizarMovimento = function(app, req, res) {
    var id = req.body._id;
    var Movimento = app.src.models.Movimento;
    Movimento.findByIdAndUpdate(id, req.body).then(
        function(movimento) {
            res.status(200).json(movimento);
        },
        function(erro) {
            console.error(erro);
            res.status(404).json('Movimento não encontrado para atualizar!')
        }
    );
}

module.exports = {
    listarMovimento,
    selecionarMovimentoPorId,
    inserirMovimento,
    excluirMovimento,
    atualizarMovimento
}