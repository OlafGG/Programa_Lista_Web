const Alumnos = require('../models/alumnos');

const getAlumno = async (req, res) => {
    
    try{
        const { alumno_id } = req.params;

        const query = await Alumnos.findOne({where: { alumno_id }});

        return res.status(200).json({code: 200, message: query});

    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
    
}

const getAlumnos = async (req, res) => {
    try{
        const query = await Alumnos.findAll();
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

const postAlumno = async (req, res) => {
    try {
        const data = req.body;
        if(data.alum_nombre){
            //Bandera
            console.log(data);
            const alumno = await Alumnos.create(data);//Insert a la tabla alumnos

            return res.status(200).json({code: 200, 
                ok: true, 
                message: "Alumno agregado", 
                data: alumno});
        }else{
            return res.status(500).json({
                ok: false, 
                message: "Ingrese los datos"
            });
        }
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const deleteAlumno = async (req, res) => {
    
    try{
        const { alumno_id } = req.body;
        if(alumno_id){
            const query = await Alumnos.destroy({where: { alumno_id }});
            
            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Usuario eliminado",
                usuario: query
            });
        }else {
            return res.status(500).json({
                code: 500,
                ok: false,
                message: "Ingrese el identificador de usuario"
            });
        }
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const patchAlumno = async (req, res) => {
    try{
        const data = req.body;
        if(data.alum_id && data.alum_nombre){
            const query = await Alumnos.update({alum_nombre: data.alum_nombre,
            promedio_parcial_1: data.promedio_parcial_1, promedio_parcial_2: data.promedio_parcial_2,
            promedio_parcial_3: data.promedio_parcial_3, promedio_final: data.promedio_final}, {where: {alum_id: data.alum_id}});

            return res.status(200).json({
                ok: true,
                message: "Alumno modificado correctamente",
                data: query
            });
        }else{
            return res.status(500).json({
                code: 500,
                ok: false,
                message: "Ingrese datos correctamente"
            });
        }
    }catch{
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}


module.exports = {
    getAlumno,
    getAlumnos,
    postAlumno,
    deleteAlumno,
    patchAlumno
}