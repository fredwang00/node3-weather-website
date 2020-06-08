const request = require('request')

// Goal: Add new data to forecast
//
// 1. Update the forecast string to include new data
// 2. Commit your changes
// 3. Push your changes to GitHub and deploy to Heroku
// 4. Test your work in the live application!

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/3d9284a83c429641602174ebf9a38dfd/${latitude},${longitude}`
    //36.839665, -76.134707
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
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain and humdity of  ${body.currently.humidity}`)
        }        
    })    
}

module.exports = forecast