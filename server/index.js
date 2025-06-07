const express = require("express");
const cors = require("cors")
require("dotenv").config();
const app = express();

const port = process.env.PORT
console.log(process.env.PORT)
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        mssg: "Root Route"
    })
});

// app.use("/api");

app.listen(port, () => {
    console.log("Server started.");
    console.log(`http://localhost:${port}`);
});