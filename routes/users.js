const { Router } = require('express');
const { getUser, postUser, deleteUser, patchUser } = require('../controllers/user.controllers');

const user = Router();

user.get('/', getUser);
user.post('/', postUser);
user.delete('/', deleteUser);
user.patch('/', patchUser)

module.exports = user;  