const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Pedro:23Ntc5svCtZ1whlR@marketplace.bhocq5y.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

