//import module MySQL2
const mysql = require('mysql2');

let connection = mysql.createConnection({
    host : '176.96.231.253',
    user : 'ephec',
    password : 'appscolaire',
    database : 'appscolaire'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });