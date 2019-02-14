const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');

app.get('/hello', (req, res) => res.send('Hello Network'));

app.listen(port, ()  => console.log(`app listening on port ${port}!`));
console.log('Hello World');