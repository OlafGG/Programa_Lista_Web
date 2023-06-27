const calendarios =  require('../models/calendary');

const getCalendary = async (req, res) => {
    try {
        const query = await calendarios.findAll();
        return res.status(200).json({ok: true, message: query})
    } catch (err) {
        return res.status(500).json({
            ok: false,
            message: 'Internal Server Error No se po que'
        });
    }
}

const postCalendary = async (req, res) => {
    try {
        const data = req.body;
        if (data.title){
            console.log(data);
            const calen = await calendarios.create(data);
            return res.status(200).json({
                code: 200,
                ok: true,
                message: 'Fecha agregada',
                data: calen
            }
            )   
        }else{
            return res.status(500).json({
                ok:false,
                message: 'Ingrese bien los datos'
            });
        }
    } catch (err) {
        return res.status(500).json({
            ok: false,
            message: 'Internal Server Error 500'
        })
    }
}

const deleteCalendary = async (req, res) => {
    try {
        const { id_calendary } = req.body;
        if(id_calendary){
            const query = await calendarios.destroy({where: { id_calendary }});
            return res.status(200).json({
                code: 200,
                ok: true,
                message: query
            });
        }else{
            return res.status(500).json({
                code: 500,
                ok: false,
                message: 'Ingrese todos los datos'
            });
        }
    } catch (err) {
        return res.status(500).json({
            ok: false, 
            message: 'Internal server error'
        })
        
    }
}

const patchCalendary = async (req, res) => {
    try {
        const data = req.body;
        if(data.id_calendary && data.day){
            const query = await calendarios.update({day: data.day, title: data.title, hour: data.hour});

            return res.status(200).json({
                code: 200, 
                ok: true, 
                message: query
            });
        }else{
            return res.status(500).json({
                code: 500, 
                ok: false, 
                message: 'Ingrese todos las caracteristicas'
            });
        }
    } catch (error) {
        return res.status(500).json({
            code: 500, 
            ok: false,
            message: 'Internal Server Error'
        })
    }
}

module.exports = {
    getCalendary,
    postCalendary, 
    deleteCalendary,
    patchCalendary
}