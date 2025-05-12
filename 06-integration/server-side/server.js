const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const cors = require('cors')

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost', // Change to your host (localhost for local MySQL server)
  user: 'root', // Default MySQL username
  password: 'root', // Replace with your root password
  database: 'sdb1' // The name of the database you created earlier
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + db.threadId);
});

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// Sample route to fetch all employees
app.get('/employees', (req, res) => {
  const sql = 'SELECT * FROM employee1';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving employees');
    }
    res.json(results);
  });
});

// // Route to add a new employee
// app.post('/employees', (req, res) => {
//   const { name, salary } = req.body;
//   const sql = 'INSERT INTO employee (name, salary) VALUES (?, ?)';
//   db.query(sql, [name, salary], (err, results) => {
//     if (err) {
//       return res.status(500).send('Error adding employee');
//     }
//     res.status(201).send('Employee added');
//   });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
