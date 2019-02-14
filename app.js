//console.log('Hello World');

const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');


app.get('/hello', (req, res) => {
   console.log(req.query);
   res.send('HEY'+ req.query.name);
});


app.get('/network', (req, res) => {
   axios.get('http://localhost:3001/hello')
   .then((networkResponse)=>{
       res.send(networkResponse.data);
   }).catch(()=>{
       res.send('did not work');
   });
});

app.get('/hello', (req,res) => res.send('HEY'));



app.get('/add', (req, res) => res.send('Add'));
app.get('/', (req, res) => res.send('Hello world'));





app.listen(port, ()  => console.log(`app listening on port ${port}!`));


console.log('Hello World');