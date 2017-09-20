module.exports = function(app) {
    var controller = {};

    var Produto = app.models.Produto;

    controller.listar = function(req, res) {
        //busca todos os produtos
        Produto.find().exec().then(
            //callback ok
            function(produtos) {
                res.json(produtos);
            },
            //callback erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };
}