const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_guide",
  password: "Adi@1996",
});

module.exports = pool.promise();
