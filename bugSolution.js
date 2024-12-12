const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  // ... some database query to fetch user data using userId ...
  if (isNaN(userId) || !userData) {
    return res.status(404).send('User not found');
  }
  res.json(userData);
});

// Solution: Manually parse userId as an integer before using it in your query.
// parseInt(req.params.id, 10) converts the string to an integer.
// isNaN(userId) checks if the conversion was successful.