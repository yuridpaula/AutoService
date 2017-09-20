var listarProduto = (app, req, res) => {
    var Produto = app.app.models.Produto;
    Produto.find().exec().then(
        function(Produto) {
            res.json(Produto);
        },
        function(erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
    );
}

var inserirProduto = function(app, req, res) {
    var Produto = app.app.models.Produto;
    var dados = req.body;

    Produto.collection.insert(dados, function(err, data) {
        if (data) {
            return res.status(200).json({ 'status': 'OK', "id": dados._id });
        }
        return res.json(err);
    });

}

var selecionarPorId = function(app, req, res) {
    var id = req.params.id;
    var Produto = app.app.models.Produto;
    Produto.collection.find(id, function(err, data) {
        if (data) {
            return res.status(200).json(data);
        }
    });


}

module.exports = {
    listarProduto,
    inserirProduto,
    selecionarPorId
}