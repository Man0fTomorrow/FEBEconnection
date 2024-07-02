const express = require('express');
const app = express();
const port = 3001;

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Query:', req.query);
  console.log('Body:', req.body); // Body will be undefined unless you add body parsers

  next(); // Pass the request to the next handler
});

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/hw', (req, res) => {
  res.json({ message: 'Hello World!' }); // Send JSON response
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
