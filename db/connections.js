const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'J3nnif3rCal3ndar',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  module.exports = db;