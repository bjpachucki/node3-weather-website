const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const location = (latitude + ',' + longitude);
  const url = 'http://api.weatherstack.com/current?access_key=337a15f8662169d00d4bfb97311583cb&query=' + encodeURIComponent(location) + '&units=f'

  request({ url, json: true }, (error, response) => {
    const res = response.body;
    if(error) {
      console.log('Unable to connect to weather services!', undefined)
    } else if (res.error) {
      console.log('Unable to find location', undefined)
    } else {
      callback(undefined, `${res.current.weather_descriptions[0]}. It is currently ${res.current.temperature} degress out with humidity of ${res.current.humidity}%. It feels like ${res.current.feelslike} degress out.`)
      }
  })
}

module.exports = forecast;