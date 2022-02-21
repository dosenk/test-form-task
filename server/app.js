var createError = require("http-errors");
var express = require("express");
var path = require("path");
var multer = require("multer");
var upload = multer();

var indexRouter = require("./routes/index");

var app = express();

const cors = require("cors");
app.use(cors());

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.any());

app.use(express.static("public"));

app.use("/", indexRouter);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
