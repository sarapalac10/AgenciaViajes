import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimoniales } from '../controllers/testimonialController.js';

//const express = require('express'); forma anterior
const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);

router.get('/contacto', (req, res)=> { 
    res.render('Contacto', {
        pagina: 'Contacto'
    })
})


export default router;