module.exports = function() {

    var controller = {}; // Objeto vazio

    controller.index = function(req, res) {
        res.render('index', { nome: 'Controle de Atividades' });
    }

    controller.ajuda = function(req, res) {
        res.render('ajuda');
    }

    controller.login = function(req, res) {
        res.render('login', {
            nome: 'Boomerang',
            mensagem: 'Informe seus dados para autentica��o'
        });
    }

    return controller;

}