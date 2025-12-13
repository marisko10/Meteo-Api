// A tua API key
const API_KEY = '9f42b3b7a7d547f5b29235848251212';

// Elementos do HTML
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const result = document.getElementById('result');

// Buscar o tempo
async function getWeather(city) {
  result.innerHTML = '<p>A carregar...</p>';
  
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
  const data = await response.json();
  
  const temp = Math.round(data.current.temp_c);
  result.innerHTML = `<h2>${data.location.name}</h2><p class="temp">${temp}°C</p>`;
}

// Clicar no botão
searchBtn.addEventListener('click', () => {
  getWeather(cityInput.value);
});

// Tecla Enter
cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') getWeather(cityInput.value);
});