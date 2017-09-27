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

module.exports = {
    listarItemMovimento,
    inserirItemMovimento,
    excluirItemMovimento
}