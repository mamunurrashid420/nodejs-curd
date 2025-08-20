const mysql = require('mysql2');
const mySqlPool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'nodejs'
})
module.exports = mySqlPool;