// Create web server
// Create a new web server using the express module
// Create a new web server using the express module
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const comments = [
  { username: 'Tim', comment: 'I am Tim' },
  { username: 'Sue', comment: 'I am Sue' },
  { username: 'Becky', comment: 'I am Becky' }
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a comment by username
app.get('/comments/:username', (req, res) => {
  const comment = comments.find((comment) => comment.username === req.params.username);
  res.json(comment);
});

// Add a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.status(201).json(newComment);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});