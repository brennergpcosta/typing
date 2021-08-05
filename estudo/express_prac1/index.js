const express = require("express");
const app = express();


app.use("/api/users", require("./routing/api/users-api.js"))

app.get("/", (req, res) => {
    res.status(200).send("<h1>Server Home Page</h1>")
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))