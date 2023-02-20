const Sequilize = require('sequelize');

const {db} = require('../config/database');


const Tareas = db.define('tareas', {
    tarea_id: {
        type: Sequilize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    //tarea_id_user: {type: Sequilize.INTEGER(6), allowNull: false},
    tarea_name: {type: Sequilize.STRING(30), allowNull: false},
    tarea_descripcion: {type: Sequilize.STRING(2000), allowNull: false},
    tarea_evidencia: {type: Sequilize.STRING(64), allowNull: true},
    tarea_calif: {type: Sequilize.DOUBLE(4, 2), allowNull: true}
});

module.exports = Tareas;