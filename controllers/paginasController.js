import { Viaje } from '../models/Viaje.js';

const paginaInicio =  (req, res)=> { 
    res.render('Inicio', {
        pagina: 'Inicio'
    })
}

const paginaNosotros = (req, res)=> { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res)=> {
    //consultar en la bd del modelo
    const viajes = await Viaje.findAll();
    console.log('viajes', viajes);

    res.render('Viajes', {
        pagina: 'Próximos Viajes',
        viajes : viajes
    })

    //Luego pasarlo a la vista de Viajes
}

const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params
    try {
        const viaje = await Viaje.findOne({ where : {slug} })
        res.render('viaje', {
            pagina: 'Información del Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaTestimoniales =  (req, res)=> {
    res.render('Testimoniales', {
        pagina: 'Testimoniales'
    })
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
}