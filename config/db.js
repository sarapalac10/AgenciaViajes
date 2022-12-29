import Sequelize from 'sequelize';

const db = new Sequelize('agenciaviajes', 'root', '', {
    host: '127.0.0.1',
    port: '3305',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;