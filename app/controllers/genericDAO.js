var list = (app, req, res, Model) => {
    Model.find().exec().then(
        function(controller) {
            res.json(controller);
        },
        function(erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
    );
}

var insert = function(app, req, res, Model) {
    var dados = req.body;

    Model.collection.insert(dados, function(err, data) {
        if (!err) {
            return res.status(200).json({ 'status': 'OK', "id": dados._id });
        } else {
            console.log(err);
            return res.json(err);
        }
    });
}

var getById = function(app, req, res, Model) {
    var id = req.params.id;
    Model.collection.find(id, function(err, data) {
        if (data) {
            return res.status(200).json(data);
        }
    });
}

var merge = function(app, req, res, Model) {
    //verifica se existe o registro

    //se existir atualiza

    //se n�o existir, insere
}

module.exports = {
    list,
    insert,
    getById,
    merge
}