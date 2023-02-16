//DEPENDENCIES
const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

//ROUTES
const user = require('./routes/users');
const materia = require('./routes/materias');
const db_con = require('./db_constructo');
//MIDDLEWARE
const index = require("./middleware/index");




app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", index);
app.use("/users", user);
app.use("/materia", materia);


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running...");
});



    