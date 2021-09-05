var connectDB = require("./config/db.js");
var logger = require("./logger/logger.js");
var cors = require("cors");
const express = require("express");

const app = express();

//routes
const equipment = require("./api/equipment.js");
//initialize DB and logger
connectDB().then(logger.emit("next", 0));

//cors initialize
app.use(cors({ origin: true, credentials: true }));

//initialize express middleware
app.use(express.json({ extended: false }));

//intial check of API
app.get("/", (req, res) => res.send("Hello world!"));

//use Routes
app.use("/api/equipment", equipment);

const port = process.env.PORT || 8085;

app.listen(port, () => console.log(`Server running on port ${port}`));
