require('dotenv').config();

const Server = require('./models/server');

//llamada al archivo de models server para empezar el proyecto
const server = new Server();

server.listen();
    