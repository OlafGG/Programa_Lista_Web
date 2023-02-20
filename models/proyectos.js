const Sequilize = require('sequelize');

const {db} = require('../config/database');


const Proyectos = db.define('proyectos', {
    proyecto_id: {
        type: Sequilize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    //proyecto_id_user: {type: Sequilize.INTEGER(6), allowNull: false},
    proyecto_name: {type: Sequilize.STRING(30), allowNull: false},
    proyecto_evidencia: {type: Sequilize.STRING(64), allowNull: true},
    descripcion_proyecto: {type: Sequilize.STRING(2000), allowNull: false},
    calif_proyecto: {type: Sequilize.DOUBLE(4, 2), allowNull: true}
});

module.exports = Proyectos;