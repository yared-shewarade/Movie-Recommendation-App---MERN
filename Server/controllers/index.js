// backend/controllers/index.js
const loginHandler = require('./loginHandler');
const generatePromptHandler = require('./generatePromptHandler');

module.exports = {
  loginHandler,
  generatePromptHandler,
};