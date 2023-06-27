const { Router } = require('express');
const {getCalendary, deleteCalendary, postCalendary, patchCalendary} = require('../controllers/calendary.controllers')

const calendary = Router();

calendary.get('/', getCalendary);
calendary.post('/', postCalendary);
calendary.delete('/', deleteCalendary);
calendary.patch('/', patchCalendary);

module.exports = calendary;