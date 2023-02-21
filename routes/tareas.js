const  { Router } = require('express');
const { getTarea, getTareas, postTarea, deleteTarea,  patchTarea } = require('../controllers/tareas.controllers');

const tarea = Router();

tarea.get('/', getTareas);
tarea.get('/:tarea_id', getTarea);
tarea.post('/', postTarea);
tarea.delete('/', deleteTarea);
tarea.patch('/', patchTarea);

module.exports = tarea;