const searchInput = document.querySelector(".form--input");
const temp = document.querySelector(".temperature");
const img = document.querySelector(".weather");
const wet = document.querySelector(".wet");
const speed = document.querySelector(".speed");
const precipitation = document.querySelector(".precipitation");
const btnFind = document.querySelector(".find");

btnFind.addEventListener("click", function () {
  const APIKey = "434bfaaf91526be1a6e7eeacbe9e5365";
  const city = searchInput.value;
  fetch(`
  https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then((resp) => {
      if (!resp.ok)
        throw new Error(`Sorry, there is no city liek this ${city} :c.`);
      return resp.json();
    })
    .then((data) => {
      img.src = `/WeatherForecast/img/${data.weather[0].main.toLowerCase()}.png`;

      temp.innerHTML = `${(+data.main.temp).toFixed(1)}℃`;
      wet.innerHTML = `${+data.main.humidity}%`;
      precipitation.innerHTML = `${data.weather[0].description}`;
      speed.innerHTML = `${(+data.wind.speed).toFixed(1)} Km/h`;
      console.log(data);
    })
    .catch((err) => console.error(`Sorry, something is wrong, ${err.message}`));
});
