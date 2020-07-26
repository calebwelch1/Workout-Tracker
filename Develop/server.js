const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3530;

const app = express();
//middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

let MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/workout";
//make connection to mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});
// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
