const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'hello from the backend' });
});

module.exports = app;
