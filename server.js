const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const dotenv = require('dotenv').config();

app.use(cors());
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('Running');

  setInterval(() => {
    console.log('Running');
  }, 5 * 60 * 1000)
});

app.listen(port, () => {
  console.log(`Server is running at Port: ${process.env.PORT}`);
});
