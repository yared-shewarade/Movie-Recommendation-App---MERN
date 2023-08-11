const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function generatePrompt(selectedFeatures) {
  try {
    const prompt = `Please recommend a movie with the following features:\n${selectedFeatures.join('\n')}`;
    
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: prompt,
        max_tokens: 50, // Adjust as needed
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating prompt:', error);
    return 'Error generating prompt';
  }
}

module.exports = { generatePrompt };