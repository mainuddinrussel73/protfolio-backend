// index.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const User = require('./model/user')
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({

  extended: true
  
}));
// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));

// Sample Route
app.get('/', (req, res) => {
  res.send("Welcome to the Express Server connected to MongoDB Atlas!");
});

// POST route to add a new user
app.post('/add-user', async (req, res) => {
    try {
      const newUser = new User(req.body); // Assume req.body contains user data
      await newUser.save(); // Save user data to MongoDB Atlas
      res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ message: 'Error adding user', error });
    }
});

app.get('/user', async (req, res) => {
    console.log(req.body)
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
