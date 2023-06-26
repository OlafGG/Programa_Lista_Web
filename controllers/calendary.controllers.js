const { query } = require('express');
const Calendary =  require('../models/calendary');

const getCalendary = async (req, res) => {
    try {
        const query = await Calendary.findAll();
        return res.status(200).json({
            ok: true,
            message: query
        });
    } catch (err) {
        return res.status(500).json({
            ok: false,
            message: 'Internal Server Error'
        });
    }
}

const postCalendary = async (req, res) => {
    try {
        const data = req.body;
        if (data.id_calendary){
            console.log(data);
            const calen = await Calendary.create(data);
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
            message: 'Internal Server Error'
        })
    }
}

const deleteCalendary = async (req, res) => {
    try {
        const { id_calendary } = req.body;
        if(id_calendary){
            const query = await Calendary.destroy({where: { id_calendary }});
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
            const query = await Calendary.update({day: data.day, title: data.title, hour: data.hour});

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