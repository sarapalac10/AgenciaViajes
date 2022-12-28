import express from 'express';
//const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> { 
    res.render('Inicio', {
        pagina: 'Inicio'
    })
})
router.get('/nosotros', (req, res)=> { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
})
router.get('/contacto', (req, res)=> { 
    res.render('Contacto', {
        pagina: 'Contacto'
    })
})
router.get('/viajes', (req, res)=> { 
    res.render('Viajes', {
        pagina: 'Viajes'
    })
})
router.get('/testimoniales', (req, res)=> { 
    res.render('Testimoniales', {
        pagina: 'Testimoniales'
    })
})

export default router;