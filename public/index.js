navigator.geolocation.getCurrentPosition(locFun, (e) => {
  console.log(e);
});

function locFun(loc) {
  console.log(loc.coords);
  const lat = loc.coords.latitude;
  const long = loc.coords.longitude;
  const link =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    long +
    "&appid=6cac814efc47c8c4d83195ae50ddcbcb&units=metric";

  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (xhr.status == 200) {
      const res = JSON.parse(xhr.response);
      console.log(res);
      const temp = res.main.temp;
      const feel = res.weather[0].description;
      const pressure = res.main.pressure;
      const humidity = res.main.humidity;
      const icon = res.weather[0].icon;
      const city = res.name;
      document.getElementById("app").innerHTML =
        `<h1 class="black">You are somewhere around : ${city}, ${res.sys.country}</h1>
  <h2 class="grey"> Temperature: ${temp} <sup>o</sup>C</h2>
  <h2 class="grey"> Pressure: ${pressure} mb</h2>
  <h2 class="grey"> Humidity: ${humidity}</h2>
  <h2 class="grey" > Feels like ${feel}</h2>` +
        `<img src=` +
        `http://openweathermap.org/img/wn/${icon}@2x.png` +
        ">"+`<p class="location">lat: ${lat},long: ${long}
        </p>`;

      if (temp < "30" && temp > "18") {
        document.getElementById("body").style.backgroundImage =
          'url("images/nice.jpg")';
      } else if (temp >= "30") {
        document.getElementById("body").style.backgroundImage =
          'url("images/hot.jpg")';
      } else {
        document.getElementById("body").style.backgroundImage =
          'url("images/cold.jpg")';
      }
    }
  };
  xhr.open("get", link, true);
  xhr.send();
}
