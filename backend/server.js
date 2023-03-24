const express = require("express");
const bodyParser = require("body-parser")
const qRoutes = require("./routes/qRoutes")

// running the server
const app = express();

// setting up the middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// Set all routes to be handled by one module
app.use("/api", qRoutes);

// app.get("/home", (req, res) => {
//   res.json({
//     name: "Bill",
//     age: 99
//   })
// })

// app.get("/query", (req, res) => {
//   res.json({
//     name: "ItWorks"
//   })
// })

// app.post("/query", (req, res) => {
//   res.json({
//     name: "PostWorks!"
//   })
// })

// app.get("/ace", (req, res) => {
//   res.json({
//     name: "Bacc",
//     age: 992
//   })
// })

app.listen(3000, () => console.log("Server is up"))