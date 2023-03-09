// import axios from 'axios'
// initialize env for storing app variables


// const GEO_USER = 'alveis';
// const WTB_API = '14517bb29eec43ed80cee68d811c5124';
// const PXB_API = '20283577-58b3a9d1f0ba50817a092fee6';

// const fetchCity = async (city) => {
//   const genomeAPI_URL = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${GEO_USER}`;
//   return getData(genomeAPI_URL)
// };

// const fetchWeatherInfo = async (lat, long) => {
//   alert('weatherbit is on')
//   const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}`
//   const weatherbitAPI_URL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=14517bb29eec43ed80cee68d811c5124`
//   return getData(weatherbitAPI_URL)
// };

// const fetchPhoto = async (city) => {
//   const pixabayAPI_URL =  `https://pixabay.com/api/?key=${PXB_API}&q=${city}&image_type=photo&category=travel&pretty=true`
//   return getData(pixabayAPI_URL)
// };

// const fetchCountry = async (country) => {
//   const restcountriesAPI_URL = `https://restcountries.eu/rest/v2/name/${country}`
//   return getData(restcountriesAPI_URL);
// };

const revert = () => {
  document.getElementById('data').style.display = 'none';
  document.getElementById('form').style.display = 'block';
}

const pattern = new RegExp('^(https?:\\/\\/)?'+ '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+'((\\d{1,3}\\.){3}\\d{1,3}))'+'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+'(\\?[;&a-z\\d%_.~+=-]*)?'+'(\\#[-a-z\\d_]*)?$','i');
function validateURL(str) {
  return !!pattern.test(str);
}

const validateInputs = (date, destination) => {
  if (date == '' || destination == '') {
    return false
  }
  return true;
}

// const previewImage = (event) => {
//   const img = event.getAttribute("src");
//   console.log(img)
//   location.href='/image-preview.html'
//   document.getElementById("image-prev").setAttribute('src') = img;
//   console.log(img)
//   document.getElementById('data').style.display = 'none';
//   document.getElementById('form').style.display = 'block';
// }

export {
  // fetchCountry,
  // fetchCity,
  // fetchPhoto,
  // fetchWeatherInfo,
  revert,
  validateURL,
  validateInputs
};

// const getData = (url) => {
//   console.log("::URL::"+url)
//   axios.get(url)
//       .then((respose) => {
//         console.log(respose)
//         return respose;
//     }) 
// }
