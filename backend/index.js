//Dependencies
const express = require('express');
const cors = require('cors');
const fs = require('fs');
//Import data from JSON file
const newsPosts = require('./data/posts.json');

// Express server setup
const app = express();
app.use(cors());

// Get endpoint to serve posts
app.get('/posts', (req, res) => {
  fs.readFile('./data/posts.json', 'utf8', (err, data) => {

    if (err) return res.status(500).send('Server Error');
    console.dir(req);
    console.log(req.url, req.method, 'get request received successfully');
    console.log('Data read from posts.json:', data);
    res.json(newsPosts);
  });
});

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));
