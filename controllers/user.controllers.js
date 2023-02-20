//DEPENDENCIES
const Usuario = require('../models/usuarios');
const db = require('../config/database');

//GET ALL USERS
const getUsers = async(req, res) => {
    const query = await Usuario.findAll();
    return res.status(200).json({code: 200, message: query});
}

const getUser = async(req, res) => {
    const { user_id } = req.params;

    const query = await Usuario.findOne({where: {user_id}});

    return res.status(200).json({code: 200, message: query});
}

const postUser = async(req, res) => {
    const { user_id, user_name, user_apellido_paterno, user_apellido_materno, user_nip } = req.body;
    if(user_id && user_name && user_apellido_materno && user_apellido_paterno && user_nip){
        let query = `INSERT INTO usuarios (user_id, user_name, user_apellido_paterno, user_apellido_materno, user_nip)`
        query += ` VALUES(${user_id}, '${user_name}', '${user_apellido_materno}', '${user_apellido_paterno}', '${user_nip}')`;

        const rows = await db.query(query);

        if (rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Usuario insertado correctamente"});
        }
        return res.status(200).json({code: 200, message: "Ocurrio un error"});
    }

    return res.status(404).json({code: 404, message: "Campos incompletos!"});
    
}

//NO SE COMO HACERLO AÚN
//dato, añadir tabla de selected, al momento de seleccionar cambiar a un positivo y luego eliminar mediante esa tabla (?)
const deleteTwoOrMoreUser = async(req, res) =>{
    const { user_id, user_name } = req.body;
    if(user_id, user_name){
        const query = ``;
    }

}

const deleteUser = async(req, res) =>{
    const { user_id } = req.body;
    if(user_id){
        const query = `DELETE FROM usuarios WHERE user_id = ${user_id} `;
        const rows = await db.query(query);
        if (rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Usuario eliminado correctamente"});
        }
        return res.status(404).json({code: 404, message: "Usuario/Nombre no encontrado"});
    }
    return res.status(404).json({code:404, ok: "Campos vacios"});

}

const patchUser = async(req, res) => {
    const { user_id, user_name, user_apellido_paterno, user_apellido_materno } = req.body;
    if (user_id && user_name && user_apellido_paterno && user_apellido_materno){
        let query = `UPDATE usuarios SET user_name = '${user_name}', user_apellido_paterno = '${user_apellido_paterno}', user_apellido_materno = '${user_apellido_materno}' WHERE user_id = ${user_id}`

        const rows = await db.query(query);
        if(rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Usuario modificado"});
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"});
    }

    return res.status(500).json({code: 500, message: "LLene los datos"});
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