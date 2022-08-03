module.exports = (sequelize, dataTypes) => {
    let cols = {
        pelicula_id: {
            type: dataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        fecha: {
            type: dataTypes.INTEGER(),
            allowNull: false
        },
        calificacion: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        timestamps: false
    }
    const Peliculas = sequelize.define("Peliculas", cols, config); 

    return Peliculas
};