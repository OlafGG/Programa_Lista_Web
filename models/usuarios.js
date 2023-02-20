const Sequilize = require('sequelize');

const {db} = require('../config/database');


//Creacion de la tabla
const Usuario = db.define('usuarios', {
    user_id: {
        type: Sequilize.INTEGER(6),
        primaryKey: true,
        autoIncrement: false
    },
    user_name: {type: Sequilize.STRING(30), allowNull: false},
    user_apellido_paterno: {type: Sequilize.STRING(30), allowNull: false},
    user_apellido_materno: {type: Sequilize.STRING(30), allowNull: false},
    user_nip: {type: Sequilize.STRING(30), allowNull: false}
});

module.exports = Usuario;