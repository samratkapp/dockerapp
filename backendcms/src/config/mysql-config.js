 
import mysql from 'mysql';

let sqlConnection;
try {
    sqlConnection = mysql.createPool({
        connectionLimit: 10,
        host: '10.5.0.5',
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

