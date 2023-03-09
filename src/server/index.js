var path = require('path');
const express = require('express');
// const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors')
// import {saveTripInfo, findTrip} from "./serverFunctions"




const dotenv = require('dotenv');
dotenv.config();

const app = express();
// app.use(express.json());

let tripInfo = {
    destination: 'Texas'
};

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

// const apiKey = process.env.API_KEY;
// app.post('/test', (req, res)=>{
//   console.log(req.body)
//   console.log(req.params)
//   const url = req.body.url;
//   console.log("::URL::"+url)
//   axios.post(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`)
//       .then((respose) => {
//         console.log(respose)
//         res.send({status:true, data:respose.data})
//     }) 
// })

// destination, date, timezone, max_temp, min_temp
app.post('/save-trip', (req, res)=>{
    const destination = req.body.destination;
    const date = req.body.date;
    const timezone = req.body.timezone
    const max_temp = req.body.max_temp
    const min_temp = req.body.min_temp

    const tripInfo = saveTripInfo(destination, date, timezone, max_temp, min_temp)
    
     res.send({status:true, data:tripInfo})
})

// fetch existing trip
app.post('/find-trip', (req, res)=>{
    const trip = findTrip()
    
     res.send({status:true, data:trip})
})




const saveTripInfo = (destination, date, timezone, max_temp, min_temp) => {
    tripInfo.destination = destination;
    tripInfo.date = date;
    tripInfo.timezone = timezone;
    tripInfo.max_temp = max_temp;
    tripInfo.min_temp = min_temp;

    return tripInfo;
}

const findTrip = () => {
    return tripInfo;
}

module.exports = {
    saveTripInfo,
    findTrip
}