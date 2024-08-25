
const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

 //validate
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

 
  const user = {
    email: 'user@example.com',
    password: await bcrypt.hash('123456', 10) 
  };

  //  if email matches
  if (email !== user.email) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  //password matches
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }


  res.status(200).json({ message: 'Login successful' });
});

module.exports = router;
