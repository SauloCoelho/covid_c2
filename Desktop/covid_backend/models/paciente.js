const Sequelize = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Paciente = sequelize.define(
        'paciente',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING
            },
            uf: {
                type: Sequelize.STRING
            },
            cid: {
                type: Sequelize.STRING
            },
            end: {
                type: Sequelize.STRING
            },
            num: {
                type: Sequelize.INTEGER
            },
            tel: {
                type: Sequelize.STRING
            },
            peso: {
                type: Sequelize.INTEGER
            },
            alt: {
                type: Sequelize.INTEGER
            },
            prob_saude: {
                type: Sequelize.STRING
            }
        },
        {
            timestamps: false
        }
    )
    return Paciente;
}