const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const router = require('./router/router');

const PORT = 3003;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on http://192.168.1.219:${PORT}`)
});