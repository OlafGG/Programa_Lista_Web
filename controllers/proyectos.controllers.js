const Proyect = require('../models/proyectos');

const getProyectos = async (req, res) => {
    try{
        const query = await Proyect.findAll();
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

const getProyecto = async (req, res) => {
    try{
        const { proyecto_id } = req.params;

        const query = await Proyect.findOne({where: {proyecto_id}});

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

const postProyectos = async (req, res) => {
    try{
        const data = req.body;
        if(data.proyecto_name && data.descripcion_proyecto){
            const proyecto = await Proyect.create(data);

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Proyecto añadido",
                data: proyecto
            });
        }else{
            return res.status(500).json({
                code: 500,
                ok: false,
                message: 'Ingrese los datos correctamente'
            });
        }
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const deleteProyecto = async (req, res) => {
    try{
        const { proyecto_id } = req.body;
        if(proyecto_id){
            const query = await Proyect.destroy({where: {proyecto_id}});

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Usuario eliminado"
            });
        }else{
            return res.status(500).json({
                code: 500,
                ok: false,
                message: "Ingrese el identificador correctamente"
            });
        }
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const patchProyecto = async (req, res) => {
    try{
        const data = req.body;
        if(data.proyecto_id && data.proyecto_name){
            const query = await Proyect.update({proyecto_id: data.proyecto_id, proyecto_name: data.proyecto_name,
            proyecto_evidencia: data.proyecto_evidencia, descripcion_proyecto: data.descripcion_proyecto, calif_proyecto: data.calif_proyecto});

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Proyecto modificado correctamente",
                data: query
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
    getProyectos,
    getProyecto,
    postProyectos,
    deleteProyecto,
    patchProyecto
}