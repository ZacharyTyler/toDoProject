import WeatherService from "../services/weather-service.js";

var _weatherService = new WeatherService()

//NOTE The weather service and controller are mostly done, 
//		you may wish to check out the model and include some additional data.


//NOTE Complete rendering data to the screen
function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	document.getElementById('weather').innerHTML = `<div><h3>${_weatherService.Weather.kelvin}°
 F</h3></div>`
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
