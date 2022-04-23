const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello Zishan!');
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});