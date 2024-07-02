const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;


// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses incoming requests with URL-encoded payloads


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

// Route to get all messages
app.get('/api/messages', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'first.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(JSON.parse(data));
    });
  });
  
  // Route to add a new message
  app.post('/api/messages', (req, res) => {
    const newMessage = req.body;
    const filePath = path.join(__dirname, 'data', 'first.json');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      const jsonData = JSON.parse(data);
      newMessage.id = jsonData.messages.length + 1; // Assign an ID to the new message
      jsonData.messages.push(newMessage);
  
      fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json(newMessage);
      });
    });
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

