// const mySqlPool = require('../config/db');


// //get all student information
// const getStudents = async (req, res) => {
//   try {
//     const [rows] = await mySqlPool.promise().query('SELECT * FROM students');

//     if (!rows.length) {
//       return res.status(404).send({
//         success: false,
//         message: 'No data found',
//       });
//     }

//     res.status(200).send({
//       success: true,
//       totalStudent: rows.length,
//       message: 'All students',
//       data: rows,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: 'Error in Get all set',
//       error: error.message,
//     });
//   }
// };



// // get studnet by id

// const getStudentById = async (req, res) => {

//     try {
//         const studentId = req.params.id;
        
//         if(!studentId){
//             return res.status(400).send({
//                 success: false,
//                 message: 'Student id is required',
//               });
//         }

//     const [rows] = await mySqlPool.promise().query('SELECT * FROM students WHERE id = ?', [req.params.id]);
//         if(!rows){
//             return res.status(404).send({
//                 success: false,
//                 message: 'No data found',
//               });
//         }
//         res.status(200).send({
//             success: true,
//             message: 'Student data',
//             data: rows[0],
//           });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//           success: false,
//           message: 'Error in Get all set',
//           error: error.message,
//         });
//       }


// };



// // student create 


// const createStudent = async (req, res) => {

// try {
//  const {name, roll_no, class:className, fees, medium} = req.body; {
//     if(!name || !roll_no || !className || !fees || !medium){
//         return res.status(400).send({
//             success: false,
//             message: 'All fields are required',
//           });
//     }
//  }
// const data = await mySqlPool.promise().query('INSERT INTO students (name, roll_no, class, fees, medium) VALUES (?, ?, ?, ?, ?)', [name, roll_no, className, fees, medium]);
// if(!data){
//     return res.status(500).send({
//         success: false,
//         message: 'did not create student',
//       });
// }
// res.status(201).send({
//     success: true,
//     message: 'Student created',
//     data: data[0],
//   });
// } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: 'did not create student',
//       error: error.message,
//     });
//   }



// };

// // student update 


// const updateStudent = async (req, res) => {
//     try {
//         const studentId = req.params.id;
//         if(!studentId){
//             return res.status(400).send({
//                 success: false,
//                 message: 'Student id is required',
//               });
//         }
//         const {name, roll_no, class:className, fees, medium} = req.body;
//         if(!name || !roll_no || !className || !fees || !medium){
//             return res.status(400).send({
//                 success: false,
//                 message: 'All fields are required',
//               });
//         }
//         const data = await mySqlPool.promise().query('UPDATE students SET name = ?, roll_no = ?, class = ?, fees = ?, medium = ? WHERE id = ?', [name, roll_no, className, fees, medium, studentId]);
//         if(!data){
//             return res.status(500).send({
//                 success: false,
//                 message: 'did not update student',
//               });
//         }
//         res.status(200).send({
//             success: true,
//             message: 'Student updated',
//             data: data[0],
//           });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//           success: false,
//           message: 'did not update student',
//           error: error.message,
//         });
//     }
// };

// // delete the student

// const deleteStudent = async (req, res) => {
// try {
//     const studentId = req.params.id;
//     if(!studentId){
//         return res.status(400).send({
//             success: false,
//             message: 'Student id is required',
//           });
//     }
//     const data = await mySqlPool.promise().query('DELETE FROM students WHERE id = ?', [studentId]);
//     if(!data){
//         return res.status(500).send({
//             success: false,
//             message: 'did not delete student',
//           });
//     }
//     res.status(200).send({
//         success: true,
//         message: 'Student deleted',
//         data: data[0],
//       });
// }catch{
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: 'did not delete student',
//       error: error.message,
//     });
// }
// };



// const uploadProfile = async (req, res) => {
//   try {
//     const studentId = req.params.id;

//     if (!req.file) {
//       return res.status(400).json({ success: false, message: "No file uploaded" });
//     }

//     const filePath = req.file.path; // uploads/students/image_1692600000000.jpg

//     // Save path to database
//     await mySqlPool
//       .promise()
//       .query("UPDATE students SET profile_image = ? WHERE id = ?", [filePath, studentId]);

//     res.status(200).json({
//       success: true,
//       message: "Profile image uploaded successfully",
//       file: req.file,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };




// module.exports = { getStudents, getStudentById, createStudent, updateStudent, deleteStudent, uploadProfile };




const mySqlPool = require('../config/db');


//get all student information
const getStudents = async (req, res) => {
  try {
    const [rows] = await mySqlPool.promise().query('SELECT * FROM students');

    if (!rows.length) {
      return res.status(404).send({
        success: false,
        message: 'No data found',
      });
    }

    res.status(200).send({
      success: true,
      totalStudent: rows.length,
      message: 'All students',
      data: rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in Get all set',
      error: error.message,
    });
  }
};



// get studnet by id

const getStudentById = async (req, res) => {

    try {
        const studentId = req.params.id;
        
        if(!studentId){
            return res.status(400).send({
                success: false,
                message: 'Student id is required',
              });
        }

    const [rows] = await mySqlPool.promise().query('SELECT * FROM students WHERE id = ?', [req.params.id]);
        if(!rows){
            return res.status(404).send({
                success: false,
                message: 'No data found',
              });
        }
        res.status(200).send({
            success: true,
            message: 'Student data',
            data: rows[0],
          });
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: 'Error in Get all set',
          error: error.message,
        });
      }


};



// student create 


const createStudent = async (req, res) => {

try {
 const {name, roll_no, class:className, fees, medium} = req.body; {
    if(!name || !roll_no || !className || !fees || !medium){
        return res.status(400).send({
            success: false,
            message: 'All fields are required',
          });
    }
 }
const data = await mySqlPool.promise().query('INSERT INTO students (name, roll_no, class, fees, medium) VALUES (?, ?, ?, ?, ?)', [name, roll_no, className, fees, medium]);
if(!data){
    return res.status(500).send({
        success: false,
        message: 'did not create student',
      });
}
res.status(201).send({
    success: true,
    message: 'Student created',
    data: data[0],
  });
} catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'did not create student',
      error: error.message,
    });
  }



};

// student update 


const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        if(!studentId){
            return res.status(400).send({
                success: false,
                message: 'Student id is required',
              });
        }
        const {name, roll_no, class:className, fees, medium} = req.body;
        if(!name || !roll_no || !className || !fees || !medium){
            return res.status(400).send({
                success: false,
                message: 'All fields are required',
              });
        }
        const data = await mySqlPool.promise().query('UPDATE students SET name = ?, roll_no = ?, class = ?, fees = ?, medium = ? WHERE id = ?', [name, roll_no, className, fees, medium, studentId]);
        if(!data){
            return res.status(500).send({
                success: false,
                message: 'did not update student',
              });
        }
        res.status(200).send({
            success: true,
            message: 'Student updated',
            data: data[0],
          });
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: 'did not update student',
          error: error.message,
        });
    }
};

// delete the student

const deleteStudent = async (req, res) => {
try {
    const studentId = req.params.id;
    if(!studentId){
        return res.status(400).send({
            success: false,
            message: 'Student id is required',
          });
    }
    const data = await mySqlPool.promise().query('DELETE FROM students WHERE id = ?', [studentId]);
    if(!data){
        return res.status(500).send({
            success: false,
            message: 'did not delete student',
          });
    }
    res.status(200).send({
        success: true,
        message: 'Student deleted',
        data: data[0],
      });
}catch{
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'did not delete student',
      error: error.message,
    });
}
};



// Fix the query to use parameterized values
// const uploadProfile = async (req, res) => {
//   try {
//     const studentId = req.params.id;

//     if (!req.file) {
//       return res.status(400).json({ success: false, message: "No file uploaded" });
//     }

//     const filePath = req.file.path; // Example: uploads/1_hemzkCvg703vmxkW72XXVA_1755765478410.jpg

//     // Use parameterized query to prevent SQL injection and ensure proper substitution
//     const [student] = await mySqlPool.promise().query("SELECT * FROM students WHERE id = ?", [studentId]);

//     if (!student) {
//       return res.status(404).json({ success: false, message: "Student not found" });
//     }

//     // Update the student record with the profile image path
//     await mySqlPool.promise().query("UPDATE students SET profile_image = ? WHERE id = ?", [filePath, studentId]);

//     res.status(200).json({
//       success: true,
//       message: "Profile image uploaded successfully",
//       file: req.file,
//     });
//   } catch (err) {
//     console.error(err); // This will log any database-related errors
//     res.status(500).json({ success: false, message: "Server error", error: err.message });
//   }
// };

const uploadProfile = async (req, res) => {
  try {
    const studentId = req.params.id;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const filePath = req.file.path; // Log this path
    console.log('File saved to: ', filePath);

    // Update the student's profile image path in the database
    await mySqlPool.promise().query("UPDATE students SET profile_image = ? WHERE id = ?", [filePath, studentId]);

    res.status(200).json({
      success: true,
      message: "Profile image uploaded successfully",
      file: req.file,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
};



module.exports = { getStudents, getStudentById, createStudent, updateStudent, deleteStudent, uploadProfile };
