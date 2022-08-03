var express = require('express');
var router = express.Router();
const db = require("../database/models")
const Op = db.Sequelize.Op;

const authController = {

    authpost: (req,res)=>{
        db.Personajes.create(req.body)
        .then(personaje =>{
            return res.json({
                Código : "Su codigo de Token de ingreso unico es : " + personaje.id,
                data: personaje
            })
        })
    },
    authlogin: (req, res) => {
        db.Personajes.findByPk(req.params.id)
        .then(personaje => {
                if(personaje == null){
                    return res.json({
                        mensaje: "Token incorrecto"
                    })
                }
                else{
                    return res.json({
                        mensaje: "Bienvenido "+personaje.nombre})
                }
        })
    },
    edit : (req, res) =>{
        db.Personajes.update({
            nombre: req.body.nombre,
            imagen: req.body.imagen,
            edad: req.body.edad,
            peso: req.body.peso,
            historia: req.body.historia,
        },{
            where: {
                id :req.params.id
            }
        })
        return res.json({
            mensaje:"Personaje editado correctamente"
        })
    },
    delete:(req, res)=>{
        db.Personajes.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json({
            mensaje:"Personaje eliminado correctamente"
        })
    },
    detalle: (req, res) => {
        db.Personajes.findByPk(req.params.id)
        .then(function(personaje){
            res.json({
                detalle : "A continuacion los detalles del Personaje",
                data : personaje
            })
        })
    },
    search: (req, res) => {
            db.Personajes.findAll({
                where:{
                    nombre: {
                        [Op.like]: '%' + req.query.keyword + '%'
                    }
                }
            }).then(personaje => {
                if(personaje.length > 0){
                    return res.json(personaje)
                }
                return res.json("No se encontró personaje")
            })
    },
    searchEdad: (req, res) => {
        db.Personajes.findAll({
            where:{
                edad: {
                    [Op.like]: '%' + req.query.keyword + '%'
                }
            }
        }).then(personaje => {
            if(personaje.length > 0){
                return res.json(personaje)
            }
            return res.json("No se encontró personaje con esa edad")
        })
    },
    searchId: (req, res) => {
        db.Personajes.findAll({
            where:{
                id: {
                    [Op.like]: '%' + req.query.keyword + '%'
                }
            }
        }).then(personaje => {
            if(personaje.length > 0){
                return res.json(personaje)
            }
            return res.json("No se encontró personaje con ese ID")
        })
    }
}

module.exports = authController;