const express = require('express');
const router = express.Router();
const { createUserAndStudent, getUserWithStudent } = require('../controllers/userController');

// POST route to create a user and student
router.post('/user', createUserAndStudent);

// GET route to fetch a user with their student data
router.get('/user/:id', getUserWithStudent);

module.exports = router;
