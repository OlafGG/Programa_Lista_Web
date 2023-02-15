const { Router } = require('express');
const { getMateria, postMateria, patchMateria, deleteMateria } = require('../controllers/materia.controllers');

const materia = Router();

materia.get('/', getMateria);
materia.post('/', postMateria);
materia.delete('/', deleteMateria);
materia.patch('/', patchMateria);

module.exports = materia;