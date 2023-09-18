//  Gsap for Animation
gsap.from(".search", { duration: 1, y: "-150%" });
gsap.from(".weather", { duration: 1, x: "-150%", ease: "power2" });

// gsap.registerPlugin(ScrollTrigger);
// let otherWeathers = gsap.utils.toArray(".other-weather");

// gsap.to(otherWeathers, {
//   xPercent: -100 * (otherWeathers.length - 1),
//   ease: "none",
//   ScrollTrigger: {
//     trigger: ".other-weathers-container",
//     pin: true,
//     scrub: 1,

//     end: () =>
//       "+=" + document.querySelector(".other-weathers-container").offsetWidth,
//   },
// });

// var auto = new TimeLineLite({
//   onComplete: function () {
//     this.restart();
//   },
// });

// auto.to(otherWeathers, 100, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
// });

// API Key & URL
const apiKey = "07b82d6d4b96480cf305758d69bdf8b7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const _error = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    _error.style.display = "block";
    weather.style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".temp").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Clouds") {
      weathericon.src = "images/mist.png";
    }

    weather.style.display = "block";
    _error.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Other cities Weather
// Berrechid Weather
async function chidWeather() {
  const response = await fetch(apiUrl + "Berrechid" + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".chid-city").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".chid-temp").innerHTML = data.name;
  document.querySelector(".chid-humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".chid-wind").innerHTML = data.wind.speed + " km/h";
  const Chidweathericon = document.querySelector(".chid-weather-icon");

  if (data.weather[0].main == "Clouds") {
    Chidweathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    Chidweathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    Chidweathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    Chidweathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Clouds") {
    Chidweathericon.src = "images/mist.png";
  }
}

chidWeather();

// Rabat Weather
async function rabatWeather() {
  const response = await fetch(apiUrl + "Rabat" + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".rabat-city").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".rabat-temp").innerHTML = data.name;
  document.querySelector(".rabat-humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".rabat-wind").innerHTML = data.wind.speed + " km/h";
  const rabatweathericon = document.querySelector(".rabat-weather-icon");

  if (data.weather[0].main == "Clouds") {
    rabatweathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    rabatweathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    rabatweathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    rabatweathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Clouds") {
    rabatweathericon.src = "images/mist.png";
  }
}

rabatWeather();

// CasaBlanca Weather

async function casaWeather() {
  const response = await fetch(apiUrl + "Casablanca" + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".casa-city").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".casa-temp").innerHTML = data.name;
  document.querySelector(".casa-humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".casa-wind").innerHTML = data.wind.speed + " km/h";
  const casaweathericon = document.querySelector(".casa-weather-icon");

  if (data.weather[0].main == "Clouds") {
    casaweathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    casaweathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    casaweathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    casaweathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Clouds") {
    casaweathericon.src = "images/mist.png";
  }
}

casaWeather();

// Fes Weather

async function fesWeather() {
  const response = await fetch(apiUrl + "Fes" + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".fes-city").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".fes-temp").innerHTML = data.name;
  document.querySelector(".fes-humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".fes-wind").innerHTML = data.wind.speed + " km/h";
  const fesweathericon = document.querySelector(".fes-weather-icon");

  if (data.weather[0].main == "Clouds") {
    fesweathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    fesweathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    fesweathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    fesweathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Clouds") {
    fesweathericon.src = "images/mist.png";
  }
}

fesWeather();

// marrakech Weather

async function marrakechWeather() {
  const response = await fetch(apiUrl + "marrakech" + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".marrakech-city").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".marrakech-temp").innerHTML = data.name;
  document.querySelector(".marrakech-humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".marrakech-wind").innerHTML =
    data.wind.speed + " km/h";
  const marrakechweathericon = document.querySelector(
    ".marrakech-weather-icon"
  );

  if (data.weather[0].main == "Clouds") {
    marrakechweathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    marrakechweathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    marrakechweathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    marrakechweathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Clouds") {
    marrakechweathericon.src = "images/mist.png";
  }
}

marrakechWeather();

// agadir Weather

async function agadirWeather() {
  const response = await fetch(apiUrl + "agadir" + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".agadir-city").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".agadir-temp").innerHTML = data.name;
  document.querySelector(".agadir-humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".agadir-wind").innerHTML = data.wind.speed + " km/h";
  const agadirweathericon = document.querySelector(".agadir-weather-icon");

  if (data.weather[0].main == "Clouds") {
    agadirweathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    agadirweathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    agadirweathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    agadirweathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Clouds") {
    agadirweathericon.src = "images/mist.png";
  }
}

agadirWeather();

// tangier Weather

async function tangierWeather() {
  const response = await fetch(apiUrl + "tangier" + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".tangier-city").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".tangier-temp").innerHTML = data.name;
  document.querySelector(".tangier-humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".tangier-wind").innerHTML = data.wind.speed + " km/h";
  const tangierweathericon = document.querySelector(".tangier-weather-icon");

  if (data.weather[0].main == "Clouds") {
    tangierweathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    tangierweathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    tangierweathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    tangierweathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Clouds") {
    tangierweathericon.src = "images/mist.png";
  }
}

tangierWeather();

// oujda Weather

async function oujdaWeather() {
  const response = await fetch(apiUrl + "oujda" + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".oujda-city").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".oujda-temp").innerHTML = data.name;
  document.querySelector(".oujda-humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".oujda-wind").innerHTML = data.wind.speed + " km/h";
  const oujdaweathericon = document.querySelector(".oujda-weather-icon");

  if (data.weather[0].main == "Clouds") {
    oujdaweathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    oujdaweathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    oujdaweathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    oujdaweathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Clouds") {
    oujdaweathericon.src = "images/mist.png";
  }
}

oujdaWeather();
