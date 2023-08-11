const express = require('express');
const router = express.Router();
const { generatePrompt } = require('../chatgpt'); // Import the function

router.post('/', async (req, res) => {
  const { selectedFeatures } = req.body;

  try {
    // Generate the prompt using the selected features
    const prompt = generatePrompt(selectedFeatures); // Replace with your function
    
    // Respond with the generated prompt
    res.json({ prompt });
  } catch (error) {
    // Handle error and respond with an error message
    res.status(500).json({ error: 'Error generating prompt' });
  }
});

module.exports = router;