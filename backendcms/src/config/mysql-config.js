 
import mysql from 'mysql';

let sqlConnection;
try {
    sqlConnection = mysql.createPool({
        connectionLimit: 10,
        host: "database" , // process.env.DATABASE_HOST || '127.0.0.1',
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

