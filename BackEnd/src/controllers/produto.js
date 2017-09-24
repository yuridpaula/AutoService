var ObjectId = require('mongodb').ObjectId;

var listarProduto = (app, req, res) => {
    var Produto = app.src.models.Produto;
    Produto.find().exec().then(
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

var inserirProduto = function(app, req, res) {
    var Produto = app.src.models.Produto;
    var dados = req.body;

    Produto.collection.insert(dados, function(err, data) {
        if (data) {
            return res.status(200).json({ status: "OK", content: { '_id': dados._id } });
        }
        return res.status(500).json(err);
    });
}

var selecionarProdutoPorId = function(app, req, res) {

    var id = req.params.id;
    var Produto = app.src.models.Produto;
    Produto.collection.findOne({ _id: new ObjectId(id) }, function(err, data) {
        if (!data) {
            return res.status(404).json({ content: [] });
        }

        if (data) {
            return res.status(200).json({ content: data });
        }

        return res.status(500).json(err);
    });
}

var excluirProduto = function(app, req, res) {
    var id = req.params.id;
    var Produto = app.src.models.Produto;
    Produto.collection.remove({ _id: new ObjectId(id) }, function(err, data) {

        if (data) {
            return res.status(200).json({ content: { status: "OK", message: "Excluido com sucesso" } });
        }

        return res.status(500).json(err);
    });
}

module.exports = {
    listarProduto,
    selecionarProdutoPorId,
    inserirProduto,
    excluirProduto
}