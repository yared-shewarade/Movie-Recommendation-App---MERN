const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const routes = require('./routes'); // Import your routes
const app = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect('mongodb+srv://yarlov21:Michael12@cs628yared.zq3uz9e.mongodb.net/?retryWrites=true&w=majority', {
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