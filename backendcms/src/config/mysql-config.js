 
import mysql from 'mysql';

let sqlConnection;
try {
    sqlConnection = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'dbcms',
        port:3306
    });
} catch (error) {
    console.log("error", error);
    throw error;
}




export default sqlConnection;

