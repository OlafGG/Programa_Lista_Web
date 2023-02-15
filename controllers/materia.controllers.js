//DEPENDENCIES
const { query } = require('../config/database');
const db = require('../config/database');

const getMateria = async(req, res) => {
    console.log('getM');
}

const postMateria = async(req, res) => {
    const { materia_id, materia_nombre, materia_caracteristica_1, materia_caracteristica_2, materia_caracteristicas_3, materia_caracteristicas_4, materia_caracteristicas_5, materia_caracteristicas_6} = req.body;
    if (materia_id && materia_nombre){
        let query =  `INSERT INTO materias(materia_id, materia_nombre,materia_caracteristica_1,`
            query+= `materia_caracteristica_2, materia_caracteristicas_3, materia_caracteristicas_4,`
            query+= `materia_caracteristicas_5, materia_caracteristicas_6) VALUES ('${materia_id}', '${materia_nombre}', '${materia_caracteristica_1}', '${materia_caracteristica_2}',`
            query+= `'${materia_caracteristicas_3}', '${materia_caracteristicas_4}', '${materia_caracteristicas_5}', '${materia_caracteristicas_6}')`;

            console.log("bandera");
        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(200).json({code: 200, ok: "Materia agregada correctamente"});
        }

        return res.status(400).json({code: 400, ok: "Ocurrio un error"});
    }

    return res.status(400).json({code:400, ok:"Campos incompletos"});
}

const deleteMateria = async(req, res) => {
    console.log("deleteM");
}

const patchMateria = async(req, res) => {
    console.log("patchM");
}

module.exports = {
    getMateria,
    postMateria,
    deleteMateria,
    patchMateria
}
