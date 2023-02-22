const Examenes = require('../models/examenes');

const getExamens = async (req, res) => {

    try {
        const query = await Examenes.findAll();
        return res.status(200).json({
            ok: true,
            message: query
        });
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const getExamen = async (req, res) => {
    
    try{
        const { id_exam_user } = req.params;

        const query = await Examenes.findOne({where: {id_examn_user}});

        return res.status(200).json({code: 200, message: query});
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const postExamen = async (req, res) => {
    try{
        const data = req.body;
        if(data.id_exam_user && data.descripcion_examen ){
            const exam = await Examenes.create(data);

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Examen creado",
                data: exam
            });
        }
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}
const deleteExamen = async (req, res) => {
    try{
        const { id_examen } = req.body;
        if(id_examen){
            const query = await Examenes.destroy({where: {id_examn}});

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Examen borrado",
                exam: query
            });
        }else{
            return res.status(500).json({
                code: 500,
                ok: false,
                message: "Ingrese el identificador"
            });
        }
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const patchExamen = async (req, res) => {
    try{
        const data = req.body;
        if(data.id_examen){
            const query = await Examenes.update({descripcion_examen: data.descripcion_examen,
            evidencia_examen: data.evidencia_examen, calif_examen: data.calif_examen});

            return res.status(200).json({
                code: 200,
                ok:true,
                message: "Examen modificado correctamente",
                data: data
            });
        }else{
            return res.status(500).json({
                code: 500,
                ok: false,
                message: "Ingrese los datos correctamente"
            });
        }
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}


module.exports = {
    getExamen,
    getExamens,
    postExamen,
    deleteExamen,
    patchExamen
}