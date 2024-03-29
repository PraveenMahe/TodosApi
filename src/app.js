const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(routers);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
