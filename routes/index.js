import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasController.js';

//const express = require('express'); forma anterior
const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/testimoniales',paginaTestimoniales);

router.get('/contacto', (req, res)=> { 
    res.render('Contacto', {
        pagina: 'Contacto'
    })
})


export default router;