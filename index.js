const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const productRouter = require('./Products/router');
const authrouter = require('./auth/router');


const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyparser.json());
app.use(productRouter);
app.use(authrouter);
app.listen(port, () =>  console.log('Listening to port',port));