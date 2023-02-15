const express = require('express');
const user = express.Router();
const db = require('../config/database');

const postUser = async(req, res) => {
    const query = await db.query("SELECT * FROM usuarios");
    return res.status(200).json({code: 200, message: query});
}

const deleteUser = async(req, res) =>{
    console.log("delete");
}

const patchUser = async(req, res) => {
    console.log("patch");
}

const getUser = async(req, res) => {
    console.log("get");
}

module.exports = {
    postUser,
    deleteUser,
    patchUser,
    getUser
}