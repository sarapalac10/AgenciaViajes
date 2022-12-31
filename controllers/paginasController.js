import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';


const paginaInicio = async (req, res)=> { 

    //Consultar 3 viajes del modelo Viaje

    const promiseDB = [];
    promiseDB.push( Viaje.findAll({ limit: 3}) );
    promiseDB.push( Testimonial.findAll({ limit: 3}) );
    
    try {
        const resultado = await Promise.all( promiseDB );

        res.render('Inicio', {
            pagina: 'Inicio',
            clase: 'home', 
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log('error', error);
    }
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

const paginaTestimoniales =  async (req, res)=> {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('Testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log('error', error);
    }
   
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
}