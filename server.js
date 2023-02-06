const express = require('express');
// const path = require('path');

// Import the API routes
const api = require('./routes/index');
const html = require('./routes/homeRoutes');

// Port to run server on
const PORT = process.env.PORT || 3001;

// Create an Express app instance
const app = express();

// Middleware to parse JSON and URL encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

// Mount the API routes at the /api endpoint
app.use('/api', api);
app.use('/', html);

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));