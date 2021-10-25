var cityname="Dallas"



var url="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units=imperial&appid=cae1e82f3bd0685e4633b7196fe6bf71";

fetch(url).then(response=> {
return response.json()

})

.then (data=> {
console.log(data)
console.log (data.main.temp)
console.log (data.name)
console.log (data.sys.country)
document.querySelector(".city-name").textContent = data.name
console.log (data.wind.speed)
document.querySelector(".temperature").textContent="Temperature: "+data.main.temp+" F"
})

var forecasturl="https://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&units=imperial&appid=cae1e82f3bd0685e4633b7196fe6bf71"

fetch(forecasturl).then(response=> {
    return response.json()
})

.then (data=> {
console.log (data)
console.log (data.main)
console.log (data.name)
console.log (data.list)
document.querySelector(".city-name")

var weatherList = data.list;

for (var i = 0; i < weatherList.length; i++) {
   console.log(weatherList[i])
   console.log (weatherList[data.main])
}



})

