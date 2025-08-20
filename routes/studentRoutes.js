const express = require("express");
const { getStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require("../controllers/studentController");

//route object
const router = express.Router();


//Get all students
router.get("/getall", getStudents);

// get all by id
router.get("/get/:id", getStudentById);


// create student 
router.post('/create', createStudent);

//update student 
router.put('/update/:id', updateStudent);

// delete student 

router.delete('/delete/:id', deleteStudent);

module.exports = router;

