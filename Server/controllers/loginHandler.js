// backend/controllers/loginHandler.js
function loginHandler(req, res) {
    const { username, password } = req.body;
  
    // Placeholder: Simulate successful login for demonstration
    if (username === 'demo' && password === 'password') {
      return res.status(200).json({ message: 'Login successful' });
    }
  
    return res.status(401).json({ message: 'Login failed' });
  }
  
  module.exports = loginHandler;