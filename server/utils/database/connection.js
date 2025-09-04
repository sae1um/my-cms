const sql = require("mysql2/promise");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const connectDB = async () => {
    try {
        const connection = await sql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_PASS
        });
        return connection;
    } catch (err) {
        console.log(err);
        throw new Error("There was an issue retrieving from the db");
    }
};

const connectDBPool = async () => {
    try {
        const connection = await sql.createPool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_PASS
        });
        return connection;
    } catch (err) {
        console.log(err);
        throw new Error("There was an issue retrieving from the db");
    }
};
module.exports = connectDB
