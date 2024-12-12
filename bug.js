const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data using userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.json(userData);
});

// Problem: What happens if userId is not a number?
// Express.js automatically parses the :id parameter as a string.
// If the database query expects an integer, this will lead to unexpected behavior.
// Solution: Manually parse userId as an integer before using it in your query.