var path = require('path');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js');


const dotenv = require('dotenv');
dotenv.config();

const app = express();
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

const apiKey = process.env.API_KEY;
app.post('/test', (req, res)=>{
  console.log(req.body)
  console.log(req.params)
  const url = req.body.url;
  console.log("::URL::"+url)
  axios.post(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`)
      .then((respose) => {
        console.log(respose)
        res.send({status:true, data:respose.data})
    }) 
})

// function analyzeData