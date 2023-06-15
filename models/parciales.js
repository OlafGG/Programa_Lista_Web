const Sequilize = require('sequelize');

const {} = require('../config/database');

const Parciales = db.define(
    'parciales',{
        parcial_id: {
            type: Sequilize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        parcial_descripcion: {type: Sequilize.STRING(30), allowNull: true}
});