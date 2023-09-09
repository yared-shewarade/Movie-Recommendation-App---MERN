const { configDotenv } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const routes = require('./routes'); // Import your routes
const app = express();
const port = process.env.PORT || 3001;

// Load the environment variables from .env file
configDotenv.config();

// Access the MongoDB URL from process.env
const mongoDB_URL = process.env.MONGODB_URL;

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(mongoDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
})();

// Use your routes
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});