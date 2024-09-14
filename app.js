const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const fs = require('fs');
const http = require('http');
const app = express();
const port = 4500;


// Logging middleware
app.use(morgan('combined'));

// Serve static files from the public directory globally

const home = fs.readFileSync('./public/intex.html','utf-8')

// Root route
const server = http.createServer((req, res) => {
    const pathName = req.url
    console.log('url: ', pathName)
    if(pathName === "/" || pathName === "/home" ){
        res.end(home)}
});

// Start the server
server.listen(port, () => {
    console.log('listening on port ' + port);
});