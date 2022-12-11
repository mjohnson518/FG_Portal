const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// Use the body parser middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Add this line to parse the request body as JSON

// Use the cors middleware to allow requests from the specified origins
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
  }));

app.listen(3001, () => {
    console.log('Server listening on port 3001');
  });

// Set up a new database connection pool
const pool = new Pool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

// Define a route for the POST method at http://localhost:3000/
app.post('/', (req, res) => {
    // Get the form data from the request body
    const formData = req.body;
  
    // Use the database connection pool to save the form data to the database
    pool.query('SHOW TABLES')
    .then((result) => {
      // Check if the table exists by looking for it in the list of tables returned by the query
      const exists = result.rows.some((row) => row.table_name === 'portal_table');
      if (!exists) {
        // The table doesn't exist, so create it
        return pool.query('CREATE TABLE portal_table (id SERIAL PRIMARY KEY, spName VARCHAR(255), country VARCHAR(255), region VARCHAR(255), city VARCHAR(255), ip VARCHAR(255), provider VARCHAR(255), billid VARCHAR(255))')
          .then(() => {
            // Once the table has been created, save the form data to the table
            return pool.query('INSERT INTO portal_table (spName, country, region, city, ip, provider, billid) VALUES ($1, $2, $3, $4, $5, $6, $7)', [formData.spName, formData.country, formData.region, formData.city, formData.ip, formData.provider, formData.billid])
              .then(() => {
                // Once the data has been saved, send a success response back to the client
                res.send({ success: true });
              });
          });
      } else {
        // The table already exists, so just send a success response
        res.send({ success: true });
      }
    })
    .catch((err) => {
        // Code to handle any errors that may occur goes here
        console.error(err);
    });
  });