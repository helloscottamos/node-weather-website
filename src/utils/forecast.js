const request = require('postman-request')

const forecast = (long, lat, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=5de6b2c64201d2e4251ef8c7c472a2a3&query="+lat+","+long

    request({url, json:true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to location services')
        }else if(body.error) {
            callback('Error code :'+body.error.code)
        }else{

            const current = body.current

            let description = 'The local dateime is '+body.location.localtime +'.'
            description += '\nThe current weather is '+current.weather_descriptions[0]+'.'
            description += '\nThere is a '+current.precip+'% chance of rain.'
            description += '\nIt is currently '+current.temperature+' degrees outside but it feels like '+current.feelslike

            callback(undefined, {
                description: description
            })
        }
    })

}

module.exports = forecast