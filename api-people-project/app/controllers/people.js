module.exports = function(app) {
    //instancia a collection
    var Person = app.models.Person;
    var controller = {};

    controller.create = function(req, res) {
        console.log(req.body);

        //cria um objeto novo na collection
        Person.create(req.body, function(err, person) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.send(person);
            }
        });
    };

    controller.find_all = function(req, res) {
        limit = parseInt(req.query.limit) || 50;
        //offset = parseInt(req.query.limit) || 1;
        offset = 1;

        Person.find().
        limit(limit).
        skip(offset).
        exec().then(
            function(person) {
                var response = {
                    metadata: {
                        limit: limit,
                        count: person.length
                    },
                    records: person
                };

                console.log(response);

                res.json(response);
            },
            function(err) {
                console.error(err);
                res.status(500).json(err);
            }
        );
    };

    controller.find_one = function(req, res) {
        limit = 1;
        offset = 1;
        id = req.params.id;

        Person.findById(id, function(err, person) {
            if (err) {
                console.error(err);
                res.status(500).json(err);
            } else {

                if (!person) {
                    res.json('empty');
                }
                var response = {
                    metadata: {
                        limit: limit,
                        count: person.length
                    },
                    records: person
                };

                console.log(response);

                res.json(response);
            };
        });
    };

    controller.update_all = function(req, res) {};

    controller.update_one = function(req, res) {
        limit = 1;
        offset = 1;
        id = req.params.id;

        Person.findOneAndUpdate({ _id: id }, req.body, { upsert: true }, function(err, person) {
            if (!err) {
                res.json(person);
            } else {
                res.json('fail');
            }
        });
    };

    controller.delete_all = function(req, res) {};

    controller.delete_one = function(req, res) {
        limit = 1;
        offset = 1;
        id = req.params.id;
        Person.deleteOne({ _id: id }, function(err) {
            if (err) {
                console.error(err);
                res.status(500).json(err);
            } else {
                res.json('ok');
            };
        });
    };



    return controller;
};