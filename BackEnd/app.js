const app = require('./config/server');

var port = app.get('port');

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
});