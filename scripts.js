const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function() {
	const searchBar = document.getElementById("search-bar").value;

	fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchBar+'&appid=9b85da3735fe7de50c7ce115dc735ec5')
	.then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
	

	.then((data) => {
		const cityName = data.name;
		const tem = data.main.temp;
		const temp = tem - 273.15;
		const description = data.weather[0].description;
		const icon = data.weather[0].icon;
		const feels = data.main.feels_like;
		const feelsLike = feels - 273.15;
		const humidity = data.main.humidity;
		const wind = data.wind.speed;

		document.querySelector(".city").innerText = "Weather in " + cityName;
    	
    	document.querySelector(".description").innerText = description;
    	document.querySelector(".temp").innerText = temp.toFixed(2) + "°C";
    	document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    	document.querySelector(".feelsLike").innerText = "Feels like: " + feelsLike.toFixed(2) + "°C";
    	document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    	document.querySelector(".wind").innerText = "Wind speed: " + wind + " km/h";
    	document.querySelector(".weather").classList.remove("loading");
    	document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";


	} );
})














