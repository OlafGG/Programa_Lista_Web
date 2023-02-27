//DEPENDENCIES
const { query } = require('express');
const Usuario = require('../models/usuarios');

//GET ALL USERS
const getUsers = async(req, res) => {
    const query = await Usuario.findAll();
    return res.status(200).json({code: 200, ok: true, message: query});
}

const getUser = async(req, res) => {
    const { user_id } = req.params;

    const query = await Usuario.findOne({where: {user_id}});

    return res.status(200).json({code: 200, ok: true, message: query});
}

const postUser = async(req, res) => {
    try{
        const data = req.body;
        if(data.user_id && data.user_name){
            const usuario = await Usuario.create(data);

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Usuario añadido",
                data: usuario
            });
        } else {
            return res.status(500).json({
                code: 500,
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

//NO SE COMO HACERLO AÚN
//dato, añadir tabla de selected, al momento de seleccionar cambiar a un positivo y luego eliminar mediante esa tabla (?)
const deleteTwoOrMoreUser = async(req, res) =>{
    

}

const deleteUser = async(req, res) =>{
    try{
        const { user_id } = req.body;
        if(user_id){
            const query = await Usuario.destroy({where: {user_id}});

            return res.status(200).json({
                code: 200,
                ok: true,
                message: "Usuario elimindo",
                data: query
            });
        }else {
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

const patchUser = async(req, res) => {
   try{
    const data = req.body;
    if(data.user_id && data.alum_nombre){
        const query = await Usuario.update({user_id: data.user_id, user_name: data.user_name,
        user_apellido_paterno: data.user_apellido_paterno, user_apellido_materno: data.user_apellido_materno, 
        user_nip: data.user_nip});

        return res.status(200).json({
            code: 200,
            ok: true,
            message: "Usuario modificado correctamente",
            data: query
        });
    }else{
        return res.status(500).json({
            code: 500,
            ok: false,
            message: "Ingrese los datos correctos"
        });
    }
   }catch(err){
    return res.status(500).json({
        ok: false,
        message: 'Internal server error',
    });
   }
}


//EXPORTS
module.exports = {
    postUser,
    deleteUser,
    deleteTwoOrMoreUser,
    patchUser,
    getUser,
    getUsers
}