const { Router } = require('express');
const { getMateria, getMaterias, postMateria, patchMateria, deleteMateria } = require('../controllers/materia.controllers');

const materia = Router();

materia.get('/:materia_id', getMateria);
materia.get('/', getMaterias);
materia.post('/', postMateria);
materia.delete('/', deleteMateria);
materia.patch('/', patchMateria);

module.exports = materia;