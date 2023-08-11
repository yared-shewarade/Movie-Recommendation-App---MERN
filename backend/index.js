const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies

// Define your API routes here
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Example: Implement API routes for adding favorite movies and generating prompts

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});