'use strict'

//importer le module Http
const http = require('http');

//importer 'app.js'
const app = require('./app');

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

//port sur lequel on écoute le serveur
server.listen(process.env.PORT || 3000);