import mysql from 'mysql';

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'c++',
  database : 'edge_backoffice_rp'
});

export default db;