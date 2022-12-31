import Sequelize from "sequelize";
import db from '../config/db.js';

export const Testimonial = db.define('testimoniales', {
    //Acá se ponen los elementos planeados para el proyecto, es decir, las tablas (o columnas)
    nombre: {
        type: Sequelize.STRING
    }, 
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})