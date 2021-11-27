const express = require('express');
const connectDB = require('./config/db');
const app = express();

// connect to db
connectDB();

app.get('/', (req, res) => {
  res.send('API runnning...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));