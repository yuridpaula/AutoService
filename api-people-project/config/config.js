const config = {
    port: 3000,
    mongoDb: {
        connectionString: () => {
            string = 'mongodb://localhost/controleAtividades';
            return string;
        }
    }
}

function init() {
    global.config = config;
}

module.exports = init();