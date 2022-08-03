module.exports = (sequelize, dataTypes) => {
    let cols = {
        id: {
            type: dataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        edad: {
            type: dataTypes.INTEGER(),
            allowNull: false
        },
        peso: {
            type: dataTypes.INTEGER(),
            allowNull: false
        },
        historia: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        timestamps: false
    }
    const Personajes = sequelize.define("Personajes", cols, config); 

    return Personajes
};