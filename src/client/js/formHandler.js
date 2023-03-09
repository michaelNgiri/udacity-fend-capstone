import axios from 'axios';
import {validateInputs} from "./functions"

const weatherbitKey = "14517bb29eec43ed80cee68d811c5124";
const geonamesUser = "alveis";
const pixabayKey = "33732010-33cf166f45763c393b25f03db"
function handleSubmit(event) {
  // alert('form handler called ')
  event.preventDefault()

  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;
  // const city = fetchCity(destination)
  console.log(date)
  if (!validateInputs(date, destination)) {
    alert('Please enter your destination and date of travel')
  } else {

    // fetch geonames api data
    console.log('axios fetch');
    axios.get(`http://api.geonames.org/searchJSON?q=${destination}&maxRows=1&username=${geonamesUser}`)
      .then((res) => {
        console.log(res)
        const c = res.data.geonames[0]
        console.log(c.lat)
        console.log(c.lng)
        console.log(c.lng)
        console.log(c.name)
        const lat = c.lat;
        const long = c.lng;
        // convert population number to human readable format then display on the ui
        const population = c.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const weatherbitAPI_URL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=${weatherbitKey}&start_date=${date}`
        const pixabayAPI_URL = `https://pixabay.com/api/?key=${pixabayKey}&q=${destination}&image_type=photo&category=travel&pretty=true`

        // use the information from geoname to get weather data from weatherbit
        axios.get(weatherbitAPI_URL)
          .then((data) => {
            console.log('::data from weatherbit::')
            console.log(data)
            const w = data.data.data[0]
            const timezone = data.data.timezone;
            const country_code = data.data.country_code;
            const max_temp = w.max_temp
            const min_temp = w.min_temp
            const clouds = w.clouds

            // this.showData(destination,lat,long,timezone,destination,max_temp,min_temp,clouds,country_code,population)
            document.getElementById('data').style.display = 'block';
            document.getElementById('form').style.display = 'none';
            // apply data to ui
            getUI('_destination', destination);
            getUI('lat', lat);
            getUI('long', long);
            getUI('timezone', timezone);
            getUI('city', destination);
            getUI('max_temp', max_temp);
            getUI('min_temp', min_temp);
            getUI('clouds', clouds);
            getUI('country_code', country_code);
            getUI('population', population);
            console.log('::data from weatherbit::')

            // add images to the ui
            // const imageURL = "https://source.unsplash.com/random/800x600"
            // setImage('image_1', imageURL)
            axios.get(pixabayAPI_URL)
            .then((data) => {
              console.log('::data from pixabay::')
              console.log(data)
              console.log(data.data.hits[0].userImageURL)
              setImage('image_1', data.data.hits[0].previewURL)
              setImage('image_2', data.data.hits[1].previewURL)
              setImage('image_3', data.data.hits[2].previewURL)
              setImage('image_4', data.data.hits[3].previewURL)
              setImage('image_5', data.data.hits[4].previewURL)
              setImage('image_6', data.data.hits[5].previewURL)
              setImage('image_7', data.data.hits[6].previewURL)
              setImage('image_8', data.data.hits[7].previewURL)
              console.log('::data from pixabay::')
            })
          saveData(destination, date, timezone, max_temp, min_temp)
          })
      
        return res;
      })
  }
}



// reusable functions
const getUI = (id,timezone)=>{
  document.getElementById(id).innerHTML = timezone;
}

// const showData = (destination, lat, long, timezone, destination, max_temp, min_temp, clouds, country_code, population) => {
          
// }

const revert = () => {
  document.getElementById('data').style.display = 'none';
  document.getElementById('form').style.display = 'block';
}

const setImage = (id,src) => {
  document.getElementById(id).setAttribute('src',src)
}


const saveData = (destination, date, timezone, max_temp, min_temp) => {
  const payload = {destination, date, timezone, max_temp, min_temp}
  axios.post('/save-trip', payload)
    .then((data) => {
         console.log("::data from backend::")
            console.log(data)
       })
}




export { handleSubmit }