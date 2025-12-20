const API_KEY = '9f42b3b7a7d547f5b29235848251212';

const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("result");

async function weather(city) {
  const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
  const data = await response.json();
  
  result.innerHTML =  `<h2> Weather in ${data.location.name} </h2>` +
                      `<p> Temperature: ${data.current.temp_c}°C </p>`
}


button.addEventListener("click", () => {
  weather(input.value);
})

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    weather(input.value);
  }
})

