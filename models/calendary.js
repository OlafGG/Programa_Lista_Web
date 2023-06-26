const Sequilize = require('sequelize');

const calendary = db.define('calendary', {
    id_calendary: {
        type: Sequilize.INTEGER(6),
        primaryKey: true,
        autoIncrement: true
    },
    day: {type: Sequilize.STRING(10), allowNull: false},
    hour: {type: Sequilize.STRING(6), allowNull: false},
    title: {type: Sequilize.STRING(50), allowNull: false}
}

);