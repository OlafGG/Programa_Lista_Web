const express = require('express');
const cors = require('cors');
//const multer = require('multer');
//const expressFileUpload = require('express-fileupload');

const {db} = require('../config/database');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //creacion de las rutas base para los movimientos
        this.paths = {
            alumnos: '/api/alumnos',
            calificaciones: '/api/calificaciones',
            examenes: '/api/examenes',
            materias: '/api/materias',
            proyectos: '/api/proyectos',
            tareas: '/api/tareas',
            ususarios: '/api/user'
        }

        //Conectar a la base de datos
        this.conectarDB();

        this.middlewares();

        //Rutas de la aplicación
        this.routes();
    }

    conectarDB(){
        db.sync().then(() => console.log('Conectado a la base de datos')).catch(err => console.log(err));
        require('./index')
    }

    middlewares(){
        //cors
        this.app.use(cors());
        
        //Lectura y parseo del body
        this.app.use(express.json());
        
        this.app.use(express.urlencoded({ extended: true }));

        // this.app.use(multer().any());

        //this.app.use(expressFileUpload());

    }

    routes(){
        //rutas que tomara la api
        this.app.use(this.paths.alumnos, require('../routes/alumnos'));
        //this.app.use(this.paths.calificaciones, require('../routes/users'));
        //this.app.use(this.paths.examenes, require('../routes/users'));
        this.app.use(this.paths.materias, require('../routes/materias'));
        //this.app.use(this.paths.proyectos, require('../routes/users'));
        //this.app.use(this.paths.tareas, require('../routes/users'));
        this.app.use(this.paths.ususarios, require('../routes/users'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port || 8000);
        })
    }
}

module.exports = Server;