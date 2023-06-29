const Tareas = require('../models/tareas');

const getTareas = async (req, res) => {
    try{
        const query = await Tareas.findAll();
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

const getTarea = async (req, res) => {
    try{
        const { tarea_id } = req.params;

        const query = await Tareas.findOne({where: {tarea_id}});

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

const postTarea = async (req, res) => {
    try {
        const data = req.body;

        if(data.tarea_name && data.tarea_descripcion){
            const tarea = await Tareas.create(data);

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Tarea añadida",
                data: tarea
            });
        } else {
            return res.status(500).json({
                code: 500,
                ok: false,
                message: "Datos faltantes"
            });
        }
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const deleteTarea = async (req, res) => {
    try{
        const { tarea_id } = req.body;
        if(tarea_id){
            const query = await Tareas.destroy({where: {tarea_id}});

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Tarea eliminada"
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

const patchTarea = async (req, res) => {
    try{
        const data = req.body;
        if(data.tarea_name && data.tarea_descripcion){
            const query =  await Tareas.update({tarea_name: data.tarea_name, tarea_descripcion: data.tarea_descripcion,
            tarea_evidencia: data.tarea_evidencia, tarea_calif: data.tarea_calif});

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Tarea modificada correctamente",
                data: query
            });
        }else{
            return res.status(500).json({
                code: 500,
                ok: false,
                message: "Ingrese datos correctamente"
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
    getTarea,
    getTareas,
    postTarea,
    deleteTarea,
    patchTarea
}