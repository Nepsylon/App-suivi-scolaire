'use strict'

//----> se rendre dans le fichier "backend" pour lancer le serveur ----> cd backend ----> npm start (commande ajouté manuellement dans le package)

//port sur lequel on effectue les opérations
const PORT = 3000;

//import Express
const express = require("express");

//crée une application express (lance un serveur)
const app = express()

app.get('/',(req,res)=> {
    res.send('hello world')
})

app.listen(PORT, ()=> {
    console.log("serveur lancé sur le port" + PORT);
})