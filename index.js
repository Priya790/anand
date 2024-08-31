const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Register = require('./models/registerSchema');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://strange99:zieUyS!zt9kL7JG@strange99.fnr7h.mongodb.net/')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());

app.post('/person', async (req, res) => {
  try {
    const { number, password, email, type } = req.body;
    const person = new Register({ number, password, email, type });
    await person.save();
    res.status(201).json({ message: 'Person registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering person', error });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
