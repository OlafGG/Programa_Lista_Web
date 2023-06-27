const Sequilize = require('sequelize');

const {db} = require('../config/database')

const calendarios = db.define('calendarios', {
    id_calendary: {
        type: Sequilize.INTEGER(6),
        primaryKey: true,
        autoIncrement: true
    },
    day: {type: Sequilize.STRING(10), allowNull: false},
    hour: {type: Sequilize.STRING(6), allowNull: false},
    title: {type: Sequilize.STRING(50), allowNull: false},
    id_profesor: {type: Sequilize.INTEGER(6), allowNull: false}
}

);

module.exports = calendarios;