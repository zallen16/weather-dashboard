var APIkey = '3f3790c4a7515348da4eb07b739d35d4';
// var coordinatesAPI = 'http://api.openweathermap.org/geo/1.0/direct?q=Miami&limit=1&appid=3f3790c4a7515348da4eb07b739d35d4';
var fiveDayAPI = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=' + APIkey;
// fetch(fiveDayAPI)
// .then((response)=>{
//     console.log(response)
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)

// })
// fetch(coordinatesAPI)
// .then((response)=>{
//     console.log(response)
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
function getCoordinates (cityName){
    console.log(cityName)
    var coordinatesAPI = 'http://api.openweathermap.org/geo/1.0/direct?q='+cityName+'&limit=1&appid=3f3790c4a7515348da4eb07b739d35d4';
    fetch(coordinatesAPI)
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
}
getCoordinates("New York")

