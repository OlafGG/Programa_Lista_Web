//DEPENDENCIES
const db = require('../config/database');

//GET ALL USERS
const getUser = async(req, res) => {
    const query = await db.query("SELECT * FROM usuarios");
    return res.status(200).json({code: 200, message: query});
}

const postUser = async(req, res) => {
    console.log("post");
}

const deleteUser = async(req, res) =>{
    console.log("delete");
}

const patchUser = async(req, res) => {
    console.log("patch");
}


//EXPORTS
module.exports = {
    postUser,
    deleteUser,
    patchUser,
    getUser
}