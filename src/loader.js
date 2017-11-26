const express = require('express');
const port = 3003;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`[SERVER] Running on port ${port}`);
});
