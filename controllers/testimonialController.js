///importar modelo creado de la bd
import { Testimonial } from '../models/Testimoniales.js';

//Definir función que está en el index

const guardarTestimoniales = async (req, res) => {

    //validar los datos recibidos
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: "El nombre está vacío"});
    }

    if(correo.trim() === '') {
        errores.push({mensaje: "El correo está vacío"});
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje: "El mensaje está vacío"});
    }

    //console.log(req.body);
    //console.log('errores', errores);

    if(errores.length > 0){
        //Consultar los testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //Mostar vista con errores
        
        res.render('Testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales 
        })
    } else{
        //Almacenar datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log('error', error)
        }
    }
}

export {
    guardarTestimoniales
}