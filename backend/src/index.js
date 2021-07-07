const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const corsOptions = {
  origin: '*',
  optionsSuccesStatus: 200
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);
app.listen(process.env.PORT || 3333);