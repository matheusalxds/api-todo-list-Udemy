const express = require('express');
const port = 3003;
const bodyParser = require('body-parser');
const app = express();
const allowCors = require('./cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCors);

app.listen(port, () => {
  console.log(`[SERVER] Running on port ${port}.`);
});

module.exports = app;
