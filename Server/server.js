// backend/server.js
const express = require('express');
const path = require('path');
const generateMovieRecommendation = require('./chatgpt'); // Import the function

const app = express();
app.use(express.json());

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Route to generate movie recommendation
app.post('/api/generate-recommendation', async (req, res) => {
  const userMessage = req.body.userMessage;
  const recommendation = await generateMovieRecommendation(userMessage);

  res.json({ recommendation });
});

// ...other routes and setup

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});