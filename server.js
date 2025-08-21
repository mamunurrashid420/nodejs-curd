// server.js
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Create uploads folder if it doesn't exist
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // file extension
    const name = file.originalname.replace(ext, "").replace(/\s+/g, "_"); // sanitize name
    cb(null, `${name}_${Date.now()}${ext}`); // filename + timestamp + extension
  },
});

// Multer middleware
const upload = multer({ storage: storage });

// Routes
app.use("/api/v1/student", require('./routes/studentRoutes'));

app.get('/test', (req, res) => {
  res.status(200).send('<h1>Welcome to NodeJS server test</h1>');
});

// Single file upload
app.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).send({
    success: true,
    message: 'File uploaded',
    data: req.file,
  });
});

// Multiple file upload
app.post('/uploads', upload.array('images', 12), (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Files uploaded',
    data: req.files,
  });
});

const port = process.env.PORT || 8000;

// DB connection & server start
mySqlPool
  .promise()
  .query('SELECT 1')
  .then(() => {
    console.log('DB connected'.bgCyan.white);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`.bgMagenta.white);
    });
  })
  .catch((err) => {
    console.log('DB connection error'.bgRed.white);
    console.error(err);
    process.exit(1);
  });
