const express = require("express");
const path = require("path");
const Members = require("./Members");

// Middlewares
const logger = require("./middlewares/logger")

const app = express();



app.use(logger)

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sever started on PORT: ${PORT}`));