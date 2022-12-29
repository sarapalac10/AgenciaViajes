import Sequelize from "sequelize";
import db from '../config/db.js';

export const Viaje = db.define('viajes', {
    //Acá se ponen los elementos planeados para el proyecto, es decir, las tablas (o columnas)
    titulo: {
        type: Sequelize.STRING
    }, 
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
})