const Sequilize = require('sequelize');

const {db} = require('../config/database');


const Calificaciones = db.define('calificaciones' ,{
    calif_id: {
        type: Sequilize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    calif_id_user: {type: Sequilize.INTEGER(6), allowNull: false},
    calif_final_tareas: {type: Sequilize.DOUBLE(4, 2), allowNull: true},
    calif_final_proyectos: {type: Sequilize.DOUBLE(4, 2), allowNull: true},
    calif_final_examenes: {type: Sequilize.DOUBLE(4, 2), allowNull: true},
    promedio_parcial_1: {type: Sequilize.DOUBLE(4, 2), allowNull: true},
    promedio_parcial_2: {type: Sequilize.DOUBLE(4, 2), allowNull: true},
    promedio_parcial_3: {type: Sequilize.DOUBLE(4, 2), allowNull: true},
    promedio_final: {type: Sequilize.DOUBLE(4, 2), allowNull: true},

});

module.exports = Calificaciones;