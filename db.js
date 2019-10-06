const Sequelize = require('sequelize');
 
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'

const db= new Sequelize(connectionString);

db
 .sync()
 .then(() => console.log('Db schema updated'))
 .catch(console.error)

module.exports = db;