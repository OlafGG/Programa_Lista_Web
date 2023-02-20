const Sequilize = require('sequelize');

const {db} = require('../config/database');

//creacion de la tabla

const Materias = db.define('materias',{
    materia_id: {
        type: Sequilize.STRING(6), 
        primaryKey: true, 
        autoIncrement: false
    },
    materia_name: {type: Sequilize.STRING(20), allowNull: false},
    materia_caracteristica_1: {type: Sequilize.STRING(30), allowNull: true},
    materia_caracteristica_2: {type: Sequilize.STRING(30), allowNull: true},
    materia_caracteristica_3: {type: Sequilize.STRING(30), allowNull: true},
    materia_caracteristica_4: {type: Sequilize.STRING(30), allowNull: true},
    materia_caracteristica_5: {type: Sequilize.STRING(30), allowNull: true},
    materia_caracteristica_6: {type: Sequilize.STRING(30), allowNull: true}
});

//Exportacion del objeto Materias
module.exports = Materias;