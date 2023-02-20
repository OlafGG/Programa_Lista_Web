const materias = require('./materias');
const Usuario = require('./usuarios');
const Alumnos = require('./alumnos');
const Calificaciones = require('./calificaciones');
const Examenes = require('./examenes');
const Proyectos = require('./proyectos');
const Tareas = require('./tareas');

//Inicio de los modelos de las tablas en la bd
module.exports = {
    Alumnos,
    Calificaciones,
    Examenes,
    Proyectos,
    Tareas,
    materias, 
    Usuario
}