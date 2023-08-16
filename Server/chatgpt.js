// backend/chatgpt.js
const axios = require('axios');

const generateMovieRecommendation = async (input) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const url = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: 'You are a helpful assistant that recommends movies.' }, { role: 'user', content: input }],
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating movie recommendation:', error);
    return 'Unable to generate recommendation at the moment.';
  }
};

module.exports = generateMovieRecommendation;