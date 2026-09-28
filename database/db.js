const { Pool, Query } = require("pg");
const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, '../.env')});

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

pool.on('connect', () => {
    console.log("Connected to PostgreSQL database")
});

pool.on('error', () => {
    console.error("Unexpected database error:", error)
    process.exit(-1)
});

module.exports = {query: (text, params) => pool.query(text, params), pool,};