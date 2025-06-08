const express = require("express");
const bcrypt = require("bcryptjs");
const { fetchUserDetails } = require("../../utils/database/databaseUtils");
const { loginController } = require("../../controllers/authControllers");
const router = express();

//hash password in db

router.post("/auth/login", async (req, res) => {
    // Retrieves client pass from req
    const { userPassword } = req.body;

    // Retrive db password
    const result = await fetchUserDetails();
    const db_pass = result[0].hash_password;

    // Compare 
    const isValid = await loginController(userPassword, db_pass);
    if(!isValid){
        res.status(401).json({error: "Invalid Password"})
    }
    // Return status
    // If correct then new session token
    res.status(200).json({error: false, message: "Login Successful"});
})

router.post("/auth/register", (req, res) => {
    res.status(204).json("Registration not yet implemented. Try again later")
})

router.delete("/auth/logout", (req, res) => {
    res.status(204).json("Deletion not yet implemented. Try again later")
})

module.exports = router