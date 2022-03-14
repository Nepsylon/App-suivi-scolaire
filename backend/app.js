'use strict'

//importer le module Express
const express = require('express');

const app = express();

app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

//exporter 'app.js'
module.exports = app;