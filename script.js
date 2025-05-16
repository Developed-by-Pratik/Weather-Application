const input = document.getElementById("city");
const search = document.getElementById("fetch-weather");

search.addEventListener("click", () => {

  if (input.value === "") {
    alert("Please enter a city name");
    return;
  }

  const city = input.value;
  input.value = "";

  fetchWeather(city)
    .then((data) => {
      updateDOM(data);
    })
    .catch((error) => {
      console.error(error);
    });
});

const updateDOM = (data) => {
  document.querySelector(".temperature").innerText =
    data.current.temp_c + " °C";
  document.getElementById("location").innerText = data.location.name;
  document.getElementById("time").innerText =
    data.location.localtime.split(" ")[1];
  document.getElementById("Day").innerText = new Date(
    data.location.localtime
  ).toLocaleString("en-US", { weekday: "long" });
  document.getElementById("Date").innerText =
    data.location.localtime.split(" ")[0];
  document.getElementById("condition").innerText = data.current.condition.text;
  document.querySelector(".weather-condition img").src =
    data.current.condition.icon;
};

const fetchWeather = async (city) => {
	
  const URL = `https://api.weatherapi.com/v1/current.json?key=53afdf3366614f1890b70037251605&q=${city}&aqi=no`;

  const response = await fetch(URL);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    alert("City not found");
  }
};

const updateData = () => {
	const city = "Pune";
	fetchWeather(city)
		.then((data) => {
			updateDOM(data);
		})
		.catch((error) => {
			console.error(error);
		});
}	

window.onload = () => {
	updateData();
}
