// backend/routes/routes.js
const express = require('express');
const router = express.Router();

// Import controllers or functions to handle routes
const { loginHandler, generatePromptHandler } = require('../controllers');

// Define API routes
router.post('/login', loginHandler);
router.post('/generate-prompt', generatePromptHandler);

module.exports = router;