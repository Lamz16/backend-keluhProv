var mysql=require('mysql');

//connect database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'keluhProv'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL');
});

module.exports = conn;