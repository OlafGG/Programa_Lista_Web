const { Router } = require('express');
const { getUser, postUser, deleteUser, patchUser, getUsers } = require('../controllers/user.controllers');

const user = Router();

user.get('/', getUsers);
user.get('/:user_id', getUser)
user.post('/', postUser);
user.delete('/', deleteUser);
user.patch('/', patchUser)

module.exports = user;  