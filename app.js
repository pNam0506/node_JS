const express = require('express');
const morgan = require('morgan');
const path = require('node:path');

const app = express();
const port = 4800;

// Middleware to log HTTP requests
app.use(morgan('combined'));

// Serving static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get("/", (req, res) => {
    // The static middleware will handle serving the HTML file
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});




// import express from 'express';
// import createDebug from 'debug';
// import morgan from 'morgan';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import { dirname as getDirname } from 'path';


// const debug = createDebug('app');

// // ES module way to get __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = getDirname(__filename);

// const app = express();
// const port = 4800;

// app.use(morgan('combined'));
// app.use(express.static(path.join(__dirname, './public/')));

// app.get('/', (req, res) => {
//     res.send('Hello Pinmanee');
// });

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });

// import express from 'express';
// import createDebug from 'debug';
// import morgan from 'morgan';
// import path, { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const debug = createDebug('app');

// // Use fileURLToPath and dirname to get the current directory (__dirname is not available in ES modules)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();
// const port = 4800;

// // Middleware to log HTTP requests
// app.use(morgan('combined'));

// // Serving static files from the 'public' folder
// app.use(express.static(path.join(__dirname, '/public')));

// // Route for the root URL
// app.get('/', (req, res) => {
//     res.send('Hello Pinmanee');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });
