const sql = require("mysql2");
const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../../server.env")});

const connection = sql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
})

const connectDB = () =>{
    connection.connect((err) => {
        if(err){
            console.error(err);
        }
        console.log("Connected " + connection.threadId);
        return connection;
    })
} 

module.exports = connectDB