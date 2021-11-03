const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
      console.log(err);
    }
    console.log(row);
  });
// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
//   // Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });
// turned this off returned everyone
//   db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
//   });

// Test to remember how to do this
// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });

// Please place this last
  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });