const Sequilize = require('sequelize');

const {db} = require('../config/database');

//cambios adaptativos
const Tareas = db.define('tareas', {
    tarea_id: {
        type: Sequilize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    tarea_materia: {type: Sequilize.STRING(30), allowNull: false},
    //tarea_id_user: {type: Sequilize.INTEGER(6), allowNull: false},
    tarea_name: {type: Sequilize.STRING(30), allowNull: false},
    tarea_descripcion: {type: Sequilize.STRING(2000), allowNull: false},
    grupo: {type: Sequilize.STRING(6)},
    tarea_evidencia: {type: Sequilize.INTEGER, allowNull: true},
    tarea_calif: {type: Sequilize.DOUBLE(4, 2), allowNull: true}
});

module.exports = Tareas;