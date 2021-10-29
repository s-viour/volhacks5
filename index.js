const express = require('express')
const app = express();
require('dotenv').config()


app.get('/', (req, res) => {
  res.send('hiiiiii!!');
});

app.listen(process.env.port, () => {
  console.log(`app listening on localhost:${process.env.port}`);
});
