const express = require("express");
const { getStudents, getStudentById, createStudent, updateStudent, deleteStudent, uploadProfile } = require("../controllers/studentController");
const upload = require('../server'); // Import the upload from server.js

// Route object
const router = express.Router();

// Get all students
router.get("/getall", getStudents);

// Get student by id
router.get("/get/:id", getStudentById);

// Create student
router.post('/create', createStudent);

// Update student
router.put('/update/:id', updateStudent);

// Delete student
router.delete('/delete/:id', deleteStudent);

// Multer for profile image upload
router.post('/upload/:id', upload.single('image'), uploadProfile);

module.exports = router;
