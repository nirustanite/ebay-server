const db = require('../db');
const Sequelize = require('sequelize');

const Product = db.define('product', {
    title:{
        type:Sequelize.STRING,
        allowNull: false
    },
    description :{
        type:Sequelize.STRING,
        allowNull: false
    },
    picture:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    emailAddress:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Product