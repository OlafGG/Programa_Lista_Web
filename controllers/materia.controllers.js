//DEPENDENCIES
const Materias = require('../models/materias');

const getMateria = async(req, res) => {
    try{
        const { materia_id } = req.params;

        const query = await Materias.findOne({where: {materia_id}});
        return res.status(200).json({code: 200, message: query});

    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const getMaterias = async (req, res) => {
    try{
        const query = await Materias.findAll();
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

const postMateria = async(req, res) => {
    try{
        const data = req.body;
        if (data.materia_id && data.materia_nombre){
            const materia = await Materias.create(data);

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Materia agregada",
                data: materia
            });
        }else{
            return res.status(500).json({
                code:500, 
                ok: false, 
                message: "Campos incompletos"});
        }
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const deleteMateria = async(req, res) => {
    
}

const patchMateria = async(req, res) => {
    
}

module.exports = {
    getMateria,
    getMaterias,
    postMateria,
    deleteMateria,
    patchMateria
}
