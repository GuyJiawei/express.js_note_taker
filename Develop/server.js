const express = require('express');
const path = require('path');

// Import the API routes
const api = require('./routes/index');

// Port to run server on
const PORT = process.env.PORT || 3001;

// Create an Express app instance
const app = express();

// Middleware to parse JSON and URL encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Mount the API routes at the /api endpoint
app.use('/api', api);