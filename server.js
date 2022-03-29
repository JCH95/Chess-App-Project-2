const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');
const uniqueid = require('uniqid');



// Middleware
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());
// Parse incoming css/js data
app.use(express.static('public'));



// Starts the server and console logs if it's working
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});