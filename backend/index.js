const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

//db connection

//routes

app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`)
})