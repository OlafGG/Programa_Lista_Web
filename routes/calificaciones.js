const { Router } = require('express');
const { getCalif, getAllCalif, postCalif, deleteCalif, patchCalif } = require('../controllers/calificaciones.controllers');

const calif = Router();

calif.get('/', getAllCalif);
calif.get('/:calif_id', getCalif);
calif.post('/', postCalif);
calif.delete('/', deleteCalif);
calif.patch('/', patchCalif);

module.exports = calif;