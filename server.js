const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const fse = require('fs-extra');




const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(new Date().toLocaleString() + " " + req.url);
    next();
});

app.get('/nativeAPI', function (req, res) {    
    res.sendFile(path.join(__dirname, "public", "views","nativeAPI.html"));
});

app.get('/backgroundSync', function (req, res) {    
    res.sendFile(path.join(__dirname, "public", "views","backgroundSync.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "views","index.html"));
});

const httpPort = process.env.PORT || 3000;

app.listen(httpPort, function () {
    console.log(`HTTP listening on port: ${httpPort}`);
});

