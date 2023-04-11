// Importing required packages
const bodyParser = require('body-parser');
const express = require('express');

// Creating an instance of the Express app
const app = express();

// Setting the view engine to EJS
app.set('view engine', 'ejs');

// Adding middleware to parse incoming request bodies as URL-encoded or JSON data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Function that takes in x and result and returns an array of strings
function getResult(x, result) {
    const return_arr = [];
    return_arr.push("hello");
    return_arr.push(x.toString());
    return_arr.push(result);
    return_arr.push("done");
    return return_arr;
}

// Function that takes in x, y, and z, and returns an array of strings based on the result
function solve(x, y, z) {
    if (Math.pow(x, y) > z) {
        return getResult(x, "higher than expected");
    } else {
        return getResult(x, Math.pow(x, y).toString());
    }
}

// Route handler for GET requests to the root URL
app.get('/', (req, res) => {
    // Render the index.ejs template with an empty array as the result
    res.render('index', { res: [] });
});

// Route handler for POST requests to the root URL
app.post('/', (req, res) => {
    // Extract the x, y, and z values from the request body
    const { x, y, z } = req.body;
    // Call the solve function with x, y, and z, and store the result
    const result = solve(x, y, z);
    // Render the index.ejs template with the result array
    res.render('index', { res: result });
});

// Start the server and listen on port 3000
app.listen(3000, () => {console.log("Server Running in PORT 3000.....")});
