import axios from 'axios';

const weatherbitKey = "14517bb29eec43ed80cee68d811c5124";
const geonamesUser = "alveis";
const pixabayKey = "33732010-33cf166f45763c393b25f03db"
function handleSubmit(event) {
  // alert('form handler called ')
  event.preventDefault()

  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;
  // const city = fetchCity(destination)
  // console.log(city)
  if (date == '' || destination == '') {
    alert('Please enter your destination and date of travel')
  } else {

    console.log('axios fetch')
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
        const population = c.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');;
        const country = c.name;
        const weatherbitAPI_URL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=${weatherbitKey}&start_date=${date}`
        const pixabayAPI_URL = `https://pixabay.com/api/?key=${pixabayKey}&q=${destination}&image_type=photo&category=travel&pretty=true`

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
          
          })
      
        axios.get(pixabayAPI_URL)
          .then((data) => {
            console.log('::data from pixabay::')
            console.log(data)
            console.log('::data from pixabay::')
          })
      
      
      
        return res;
      })
  }
}



const pattern = new RegExp('^(https?:\\/\\/)?'+ '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+'((\\d{1,3}\\.){3}\\d{1,3}))'+'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+'(\\?[;&a-z\\d%_.~+=-]*)?'+'(\\#[-a-z\\d_]*)?$','i');
function validateURL(str) {
  return !!pattern.test(str);
}
export { validateURL, handleSubmit }

const getUI = (id,timezone)=>{
  document.getElementById(id).innerHTML = timezone;
}

// const showData = (destination, lat, long, timezone, destination, max_temp, min_temp, clouds, country_code, population) => {
          
// }

const revert = () => {
  document.getElementById('data').style.display = 'none';
  document.getElementById('form').style.display = 'block';
}