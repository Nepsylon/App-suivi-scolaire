'use strict'

//importer le module Express
const express = require('express');

const app = express();

app.use(express.json());

//middleware appliqué à toutes les routes de notre API pour l'échange entre appli et serveur
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

   //passer l'éxécution au prochain middleware
   next();
 });


//exporter 'app.js'
module.exports = app;