var ObjectId = require('mongodb').ObjectId;

var listarItemMovimento = (app, req, res) => {
    var Movimento = app.src.models.Item_movimento;
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

var inserirItemMovimento = function(app, req, res) {
    var Movimento = app.src.models.Item_movimento;
    var dados = req.body;

    Movimento.collection.insert(dados, function(err, data) {
        if (data) {
            return res.status(200).json(dados._id);
        }
        return res.status(500).json(err);
    });

}

var excluirItemMovimento = function(app, req, res) {
    var id = req.params.id;
    var Movimento = app.src.models.Item_movimento;
    Movimento.collection.remove({ _id: new ObjectId(id) }, function(err, data) {

        if (data) {
            return res.status(200).json({ content: { status: "OK", message: "Excluido com sucesso" } });
        }

        return res.status(500).json(err);
    });
}


var atualizarItemMovimento = function(app, req, res) {
    var id = req.body._id;
    var ItemMovimento = app.src.models.Item_movimento;
    ItemMovimento.findByIdAndUpdate(id, req.body).then(
        function(item) {
            res.status(200).json(item);
        },
        function(erro) {
            console.error(erro);
            res.status(404).json('Item Movimento não encontrado para atualizar!')
        }
    );
}

var listarItemIdCabMovimento = function(app, req, res) {
    var ItemMovimento = app.src.models.Item_movimento;
    ItemMovimento.find({ cab_movimento: req.params.id }, function(err, data) {
        if (err) {
            return console.error(err);
        }
        return res.status(200).json(data);
    });
}

module.exports = {
    listarItemMovimento,
    inserirItemMovimento,
    excluirItemMovimento,
    atualizarItemMovimento,
    listarItemIdCabMovimento
}