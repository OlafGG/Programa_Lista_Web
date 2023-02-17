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
const notFound = require("./middleware/notFound")


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", index);
app.use("/users", user);
app.use("/materias", materia);
/*app.use("/calificaciones");
app.use("/examenes");
app.use("/proyectos");
app.use("/tareas");
app.use("/alumnos");
app.use(notFound);
*/

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running...");
});



    