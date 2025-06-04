const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const personRoutes = require('./routes/personRoutes');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/peopleDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));

app.use(cors());
app.use(bodyParser.json());
app.use('/person', personRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
