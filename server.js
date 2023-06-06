const express = require('express');

const app = express();

app.get("/", (req,res) => {
    console.log("Hello from express 😁");
    res.json({message: "hello"}).status(200);
})

module.exports = app;