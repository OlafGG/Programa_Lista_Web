const Sequilize = require('sequelize');

const {db} = require('../config/database');


const Examenes = db.define('examenes', {
    id_examen: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    //examen_id_usuario: {type: Sequilize.INTEGER(6), allowNull: false},
    descripcion_examen: {type: Sequilize.STRING(2000), allowNull: false},
    evidencia_examen: {type: Sequilize.STRING(64), allowNull: true},
    calif_examen: {type: Sequilize.DOUBLE(4, 2), allowNull: true}

});

module.exports = Examenes;