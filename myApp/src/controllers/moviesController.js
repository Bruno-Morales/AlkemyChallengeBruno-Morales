var express = require("express");
var router = express.Router();
const db = require("../database/models");
const Op = db.Sequelize.Op;

const moviesController = {
  movies: (req, res) => {
    db.Peliculas.findAll().then((pelicula) => {
      let array = [];
      for (Peliculas in pelicula) {
        array.push(
          "Nombre : " +
            pelicula[Peliculas].titulo +
            ". imagen : " +
            pelicula[Peliculas].imagen,
          +". Fecha creacion : " + pelicula[Peliculas].fecha
        );
      }
      res.json(array);
    });
  },
  detail: (req, res) => {
    db.Peliculas.findByPk(req.params.id).then(function (pelicula) {
      res.json({
        detalle: "A continuacion los detalles de la pelicula",
        data: pelicula,
      });
    });
  },
  create: (req, res) => {
    db.Peliculas.create(req.body).then((pelicula) => {
      return res.json({
        mensaje: "Creación de pelicula exitosa",
        data: pelicula,
      });
    });
  },
  edit: (req, res) => {
    db.Peliculas.update(
      {
        titulo: req.body.titulo,
        imagen: req.body.imagen,
        fecha: req.body.fecha,
        calificacion: req.body.calificacion,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.json({
      mensaje: "Pelicula editada correctamente",
    });
  },
  delete: (req, res) => {
    db.Peliculas.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      mensaje: "Pelicula eliminada correctamente",
    });
  },
  search: (req, res) => {
    db.Peliculas.findAll({
      where: {
        titulo: {
          [Op.like]: "%" + req.query.keyword + "%",
        },
      },
    }).then((pelicula) => {
      if (pelicula.length > 0) {
        return res.json(pelicula);
      }
      return res.json("No se encontró Pelicula");
    });
  },
  searchGenero: (req, res) => {
    db.Peliculas.findAll({
      where: {
        pelicula_id: {
          [Op.like]: "%" + req.query.keyword + "%",
        },
      },
    }).then((pelicula) => {
      if (pelicula.length > 0) {
        return res.json(pelicula);
      }
      return res.json("No se encontró Pelicula con ese genero.");
    });
  },
};

module.exports = moviesController;
