const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const membersData = require("./routes/api/members")

const app = express();

// Middlewares

app.use(express.json())
app.use(urlencoded({ extended: false }))

// const logger = require("./middlewares/logger")
// app.use(logger)

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Members Api Route
app.use('/api/members', membersData)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sever started on PORT: ${PORT}`));