const express = require('express');
const app = express();
const port = 5000;

const { sumFunction } = require('./utils');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running 9');
});

app.post('/sum', (req, res) => {
  const { value1, value2 } = req.body;
  return res.json({
    result: sumFunction(value1, value2),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
