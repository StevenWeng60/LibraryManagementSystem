const express = require("express");
const bodyParser = require("body-parser")

// running the server
const app = express();

// setting up the middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get("/home", (req, res) => {
  res.json({
    name: "Bill",
    age: 99
  })
})

app.get("/ace", (req, res) => {
  res.json({
    name: "Bacc",
    age: 992
  })
})

app.listen(3000, () => console.log("Server is up"))