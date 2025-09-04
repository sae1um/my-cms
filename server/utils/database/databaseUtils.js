const connectDB = require("./connection");

async function fetchUserDetails(){
    const database = await connectDB();
    try {
        const [results] = await database.query("SELECT * FROM admins");
        await database.end();
        return results;
    }catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
    }
}

module.exports = {
    fetchUserDetails
}