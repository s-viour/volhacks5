const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.listen(process.env.port, () => {
  console.log(`listening on http://localhost:${process.env.port}`);
});
