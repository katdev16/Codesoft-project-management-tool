const express = require('express');
const mongoose = require('cors');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.arguments(cors());
app.arguments(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define routes here
app.use('/api/projects', require('./routes/projects'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5060;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));