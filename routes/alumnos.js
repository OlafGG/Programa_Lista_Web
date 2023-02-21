const { Router } = require('express');
const { getAlumno, getAlumnos, postAlumno, deleteAlumno, patchAlumno} = require('../controllers/alumnos.controllers');

const alum = Router();

alum.get('/', getAlumnos);
alum.get('/:alumno_id', getAlumno);
alum.post('/', postAlumno);
alum.delete('/', deleteAlumno);
alum.patch('/', patchAlumno);

module.exports = alum;