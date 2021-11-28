const express = require('express');
const app = express();

//use for serve static file inside directory
app.use(express.static(__dirname));

module.exports = app;
