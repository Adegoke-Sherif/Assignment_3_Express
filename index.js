const express = require('express');
const app = express();
const authorsRouter = require('./routes/author.Route');
// const PORT = 3300
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // For parsing application/json

// Logger middleware
app.use((req, res, next) => {
    console.log(`${new Date().toString()} - ${req.method} request for ${req.url}`);
    next();
});

// Use Routes
app.use('/authors', authorsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});