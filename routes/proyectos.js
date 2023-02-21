const { Router } = require('express');
const { getProyecto, getProyectos, postProyectos, deleteProyecto, patchProyecto } = require('../controllers/proyectos.controllers');

const proy = Router();

proy.get('/', getProyectos);
proy.get('/:proyecto_id', getProyecto);
proy.post('/', postProyectos);
proy.delete('/', deleteProyecto);
proy.patch('/', patchProyecto);

module.exports = proy;