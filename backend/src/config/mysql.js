import mysql from 'mysql';

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'c++',
  database : 'edge_backoffice_rp'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;

    console.log(`The solution is: ${results[0].solution} So you are working on Backend of Recycle Plus`);
});

connection.end();