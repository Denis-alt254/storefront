const express = require("express");
const db = require("../database/db");
const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, '../.env')});

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

//db connection

//routes
app.get('/users', async(req, res) => {
    try {
        const {rows} = await db.query('SELECT id, email FROM users');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`)
})