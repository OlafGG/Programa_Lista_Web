const  { Router } = require('express');
const { getExamen, getExamens, postExamen, deleteExamen, patchExamen } = require('../controllers/examenes.controllers');

const examn = Router();

examn.get('/:id_exam_user', getExamen);
examn.get('/', getExamens);
examn.post('/', postExamen);
examn.delete('/', deleteExamen);
examn.patch('/', patchExamen);

module.exports = examn;