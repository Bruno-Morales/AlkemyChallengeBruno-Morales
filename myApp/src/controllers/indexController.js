var express = require('express');
var router = express.Router();
const db = require("../database/models")


const indexController = {
    index: (req, res) => {
        res.json({
            mensaje:"Estas en el Index"
        })
    },
    charters: (req, res) => {
        db.Personajes.findAll()
        .then(personaje => {
        
            let array = []
            for(personajes in personaje){
                array.push("Nombre : "+personaje[personajes].nombre + " imagen : " + personaje[personajes].imagen)
            }
            res.json(array)
        })
    }

}

module.exports = indexController;