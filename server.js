// server.js
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

//routes

app.use("/api/v1/student", require('./routes/studentRoutes'));


app.get('/test', (req, res) => {
  res.status(200).send('<h1>wellcome to nodejs server test</h1>');
});

const port = process.env.PORT || 8000;

mySqlPool
  .promise()
  .query('SELECT 1')
  .then(() => {
    console.log('DB connected'.bgCyan.white);
    app.listen(port, () => {
      console.log(`server is running on port ${port}`.bgMagenta.white);
    });
  })
  .catch((err) => {
    console.log('DB connection error'.bgRed.white);
    console.error(err);
    process.exit(1);
  });
