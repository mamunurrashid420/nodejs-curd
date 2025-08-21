const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = "./uploads/students";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // file extension
    const name = file.originalname.replace(ext, "").replace(/\s+/g, "_");
    cb(null, `${name}_${Date.now()}${ext}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
