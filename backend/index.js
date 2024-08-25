
const express = require('express');
const dotenv = require('dotenv');


dotenv.config();


const app = express();


app.use(express.json());


const authRoutes = require('./routes/auth');


app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
