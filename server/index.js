const express = require("express");
const cors = require("cors")
require("dotenv").config();

const app = express();

const authRouter = require("./routes/auth/adminAuth")

const port = process.env.PORT

app.use(express.json());
app.use(cors())

//Auth Routes
app.use("/api", authRouter);

app.listen(port, () => {
    console.log("Server started.");
    console.log(`http://localhost:${port}`);
});