const mysql = require('mysql');


let db_con  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ''
});
  
db_con.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("connected to Database");
    }
});

databaseConstructo();
tableAlumnos();
tableCalificaciones();
tableExamenes();
tableMaterias();
tableProyectos();
tableTareas();
tableUsuarios();

function databaseConstructo() {
    let databaseName = process.env.database;
    let createQuery = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
      
    // use the query to create a Database.
    db_con.query(createQuery, (err) => {
        if(err) throw err;
    
        console.log("Database Created Successfully !");

    });

    //FLAGS
    //console.log(process.env.database);
    //console.log(databaseName);
    db_con.changeUser({database: databaseName}, function(err) {
        if (err) throw err;
    });

}

function tableAlumnos() {
    const query = "CREATE TABLE IF NOT EXISTS alumnos (alum_id INT(6) AUTO_INCREMENT PRIMARY KEY, alum_nombre VARCHAR(20) NOT NULL, promedio_parcial_1 DOUBLE (4, 2), promedio_parcial_2 DOUBLE (4, 2), promedio_parcial_3 DOUBLE (4, 2), promedio_final DOUBLE(4, 2))";
    
    db_con.query(query, (err) => {
        if (err) throw err;
    
        console.log("Tabla Alumnos creada");
    }); 

}

function tableCalificaciones() {
    const query = "CREATE TABLE IF NOT EXISTS califiaciones (calif_id INT AUTO_INCREMENT PRIMARY KEY, calif_id_user INT(6) NOT NULL, calif_final_tareas DOUBLE (4,2), calif_final_proyectos DOUBLE (4, 2), calif_final_examenes DOUBLE (4, 2), promedio_parcial_1 DOUBLE (4, 2), promedio_parcial_2 DOUBLE (4, 2), promedio_parcial_3 DOUBLE (4, 2), promedio_final DOUBLE (4, 2))";

    db_con.query(query, (err) => {
        if (err) throw err;

        console.log("Tabla Calificaiones creada");
    });
}

function tableExamenes() {
    const query = "CREATE TABLE IF NOT EXISTS examenes (id_examen INT AUTO_INCREMENT PRIMARY KEY, descripcion_examen VARCHAR(400) NOT NULL, evidencia_examen VARCHAR(100), calif_examen DOUBLE(4, 2))";
    db_con.query(query, (err) => {
        if (err) throw err;

        console.log("Tabla Examenes creada");
    });
}

function tableMaterias () {
    const query = "CREATE TABLE IF NOT EXISTS materias (materia_id VARCHAR(6) PRIMARY KEY, materia_name VARCHAR(20) NOT NULL, materia_caracteristica_1 VARCHAR(30), materia_caracteristica_2 VARCHAR(30), materia_caracteristica_3 VARCHAR(30), materia_caracteristica_4 VARCHAR(30), materia_caracteristica_5 VARCHAR(30), materia_caracteristica_6 VARCHAR(30))"
    db_con.query(query, (err) => {
        if (err) throw err;

        console.log("Tabla Materias creada");
    });
}

function tableProyectos () {
    const query = "CREATE TABLE IF NOT EXISTS proyectos (proyecto_id INT AUTO_INCREMENT PRIMARY KEY, proyecto_name VARCHAR(30) NOT NULL, proyecto_evidencia VARCHAR(100), descripcion_proyecto VARCHAR(2000) NOT NULL, calif_proyecto DOUBLE (4, 2))";

    db_con.query(query, (err) => {
        if (err) throw err;
    
        console.log("Tabla Proyectos creada");
    }); 
}

function tableTareas () {
    const query = "CREATE TABLE IF NOT EXISTS tareas (tarea_id INT AUTO_INCREMENT PRIMARY KEY, tarea_name VARCHAR(30) NOT NULL, tarea_descripcion VARCHAR(2000) NOT NULL, tarea_evidencia VARCHAR(100), tarea_calif DOUBLE (4, 2))"

    db_con.query(query, (err) => {
        if (err) throw err;
    
        console.log("Tabla Tareas creada");
    }); 
}

function tableUsuarios () {
    const query = "CREATE TABLE IF NOT EXISTS usuarios (user_id INT(6) PRIMARY KEY, user_name VARCHAR(20) NOT NULL, user_apellido_paterno VARCHAR(20) NOT NULL, user_apellido_materno VARCHAR(20) NOT NULL, user_nip VARCHAR(50) NOT NULL)";

    db_con.query(query, (err) => {
        if (err) throw err;
    
        console.log("Tabla Usuarios creada");
    }); 
}

module.exports = db_con;

