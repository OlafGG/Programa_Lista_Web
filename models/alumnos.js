const Sequilize = require('sequelize');

const {db} = require('../config/database');

const Alumnos =  db.define('alumnos', {
    alum_id: { 
        type: Sequilize.INTEGER(6), 
        primaryKey: true, 
        autoIncrement: false
    },
    alum_nombre: {type: Sequilize.STRING(20), allowNull: false},
    promedio_parcial_1: {type: Sequilize.DOUBLE(4, 2), allowNull: true},
    promedio_parcial_2: {type: Sequilize.DOUBLE(4, 2), allowNull: true},
    promedio_parcial_3: {type: Sequilize.DOUBLE(4, 2), allowNull: true},
    promedio_final: {type: Sequilize.DOUBLE(4, 2), allowNull: true}
});

module.exports = Alumnos;