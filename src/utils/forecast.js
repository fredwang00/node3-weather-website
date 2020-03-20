const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/3d9284a83c429641602174ebf9a38dfd/${latitude},${longitude}`
    //console.log(url)
    request({ url, json: true }, (error, { body }) => {
        //console.log(response)

        // const data = JSON.parse(response.body)
        // console.log(data.currently)

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
        }        
    })    
}

module.exports = forecast