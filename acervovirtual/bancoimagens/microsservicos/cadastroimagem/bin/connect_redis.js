const redis = require('redis');

const ConnectRedis = async () => {
    try {
        const client = redis.createClient();

        client.on('connect', function () {
            console.log('O serviço redis está conectado!');
        });

        await client.connect();

    } catch (error) {
        console.log('Ocorre um error na estrutura de chace. ', error);
    }

};

module.exports = (app) => app.use(ConnectRedis);

