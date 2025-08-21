const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller to create a new user and student
async function createUserAndStudent(req, res) {
  const { name, email, password, studentData } = req.body;

  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user along with a student
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        students: {
          create: studentData, // Create a student related to this user
        },
      },
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user and student', details: error.message });
  }
}

// Controller to fetch a user and their student data
async function getUserWithStudent(req, res) {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: { students: true },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user and student data', details: error.message });
  }
}

module.exports = { createUserAndStudent, getUserWithStudent };
