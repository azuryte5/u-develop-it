// Below was moved to connections in 12.4 
//const mysql = require('mysql2');

// This connects to connections!
const db = require('./db/connections');
const express = require('express');

// Add near the top of the file
const apiRoutes = require('./routes/apiRoutes');
// Add after Express middleware



const PORT = process.env.PORT || 3001;
const app = express();
//check for new function
// turned off in 12.4
//const inputCheck = require('./utils/inputCheck');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// routes for backend
app.use('/api', apiRoutes);

// Connect to database moved to connections in 12.4
// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       // Your MySQL username,
//       user: 'root',
//       // Your MySQL password
//       password: 'J3nnif3rCal3ndar',
//       database: 'election'
//     },
//     console.log('Connected to the election database.')
//   );
// Get all candidates moved to routes in 12.4
// app.get('/api/candidates', (req, res) => {
//     const sql = `SELECT candidates.*, parties.name
//                 AS party_name
//                 FROM candidates
//                 LEFT JOIN parties
//                 ON candidates.party_id = parties.id`;
  
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

// // GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
//   });
// // Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

  // Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });

// // Create a candidate, moved to routes in 12.4
// app.post('/api/candidate', ({ body }, res) => {
//     const errors = inputCheck(body, 'first_name', 'last_name', 'industry_connected');
//     if (errors) {
//       res.status(400).json({ error: errors });
//       return;
//     }
//     const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
//   VALUES (?,?,?)`;
// const params = [body.first_name, body.last_name, body.industry_connected];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     res.status(400).json({ error: err.message });
//     return;
//   }
//   res.json({
//     message: 'success',
//     data: body
//   });
// });
// });
//   // Get a single candidate, moved to routes in 12.4
// app.get('/api/candidate/:id', (req, res) => {
//     const sql = `SELECT candidates.*, parties.name
//                 AS party_name
//                 FROM candidates
//                 LEFT JOIN parties
//                 ON candidates.party_id = parties.id
//                 WHERE candidates.id = ?`;
//     const params = [req.params.id];
  
//     db.query(sql, params, (err, row) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: row
//       });
//     });
//   });

// // Update a candidate's party, moved in 12.4
// app.put('/api/candidate/:id', (req, res) => {
//     const errors = inputCheck(req.body, 'party_id');

// if (errors) {
//   res.status(400).json({ error: errors });
//   return;
// }
//     const sql = `UPDATE candidates SET party_id = ? 
//                  WHERE id = ?`;
//     const params = [req.body.party_id, req.params.id];
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         // check if a record was found
//       } else if (!result.affectedRows) {
//         res.json({
//           message: 'Candidate not found'
//         });
//       } else {
//         res.json({
//           message: 'success',
//           data: req.body,
//           changes: result.affectedRows
//         });
//       }
//     });
//   });

// // This is a search for all parties moved to router 12.4
// app.get('/api/parties', (req, res) => {
//     const sql = 'SELECT * FROM parties';
//     db.query(sql, (err, rows) => {
//         if (err) {
//         res.status(500).json({ error: err.message});
//         return;
//         }
//     res.json({
//         message: 'success',
//         data: rows
//     });
//   });
// });
// // this is a search for a specific party, moved in 12.4
// app.get('/api/party/:id', (req, res) => {
//     const sql = `SELECT * FROM parties WHERE id = ?`;
//     const params = [req.params.id];
//     db.query(sql, params, (err, row) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: row
//       });
//     });
//   });


// // ADD DELETE query for party, moved 12.4
// app.delete('/api/party/:id', (req, res) => {
//     const sql = 'DELETE FROM parties WHERE id = ?';
//     const params = [req.params.id];
//     db.query(sql, params, (err, result) => {
//         if (err) {
//         res.status(400).json({ error: res.message });
//         // checks if anything was deleted
//         } else if (!result.affectedRows) {
//         res.join({
//             message: 'Party not found'
//         });
//         } else {
//         res.json({
//             message: 'deleted',
//             changes: result.affectedRows,
//             id: req.params.id
//         });
//         }
//     });
// });  
//   // Delete a candidate, moved in 12.4
// app.delete('/api/candidate/:id', (req, res) => {
//     const sql = `DELETE FROM candidates WHERE id = ?`;
//     const params = [req.params.id];
  
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.statusMessage(400).json({ error: res.message });
//       } else if (!result.affectedRows) {
//         res.json({
//           message: 'Candidate not found'
//         });
//       } else {
//         res.json({
//           message: 'deleted',
//           changes: result.affectedRows,
//           id: req.params.id
//         });
//       }
//     });
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

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });