const Calificaciones = require('../models/calificaciones');

const getAllCalif = async (req, res) => {
    try{
        const query = await Calificaciones.findAll();
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

const getCalif = async (req, res) => {
    try{
        const { calif_id } = req.params;

        const query = await Calificaciones.findOne({where: {calif_id}});

        return res.status(200).json({
            code: 200,
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

const postCalif = async (req, res) => {
    try{
        const data = req.body;
        if( calif_id_user ){
            console.log(data);
            const calif = await Calificaciones.create(data);

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Calificaciones agregada",
                data: calif
            });
        }else{
            return res.status(500).json({
                code: 500,
                ok: false,
                message: "Datos incompletos"
            });
        }
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const deleteCalif = async (req, res) => {
    try{
        const { calif_id_user } = req.body;
        if(calif_id_user){
            const query = await Calificaciones.destroy({where: { calif_id_user }})

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Calificaciones eliminada"
            });
        }
        return res.status(500).json({
            code: 500,
            ok: false,
            message: "Ingrese los datos"
        });

    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const patchCalif = async (req, res) => {
    try{
        const data = req.body;
        if(calif_id_user){
            const query = await Calificaciones.update({calif_final_tareas: data.calif_final_tareas, 
            calif_final_proyectos: data.calif_final_proyectos, calif_final_examenes: data.calif_final_examenes, promedio_parcial_1: data.promedio_parcial_1,   
            promedio_parcial_2: data.promedio_parcial_2, promedio_parcial_3: data.promedio_parcial_3, promedio_final: data.promedio_final});

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Calificacion Modificada",
                data: query
            });
        }else{
            return res.status(500).json({
                code: 500,
                ok: false,
                message: "Ingrese los datos faltantes" 
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
    getAllCalif,
    getCalif,
    postCalif,
    deleteCalif,
    patchCalif
}