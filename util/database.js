const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_guide', 'root', 'Adi@1996',{
  dialect: 'mysql',
  host: 'localhost',
})

module.exports = sequelize;



// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node_guide",
//   password: "Adi@1996",
// });

// module.exports = pool.promise();
