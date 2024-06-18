const input = document.getElementById('input');
const search = document.getElementById('search');
const cityName = document.getElementById('cityname');
const icon = document.getElementById('icon');
const temperature = document.getElementById('temperature');
const minMax = document.getElementById('min-max');


async function getWeatherReport(){
  temperature.innerHTML = '';
  const min = document.createElement('span');
  const max = document.createElement('span');
  minMax.innerHTML='';
  minMax.appendChild(min);
  minMax.appendChild(max);
  const key = 'api_key';
  const cityValue = input.value;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${key}`);
  if(!response.ok){
    throw new Error('error in retrival!');
  }
  const data = await response.json();
  console.log(data);
  temperature.innerHTML = `${data.main.temp}°C`;
  min.innerHTML = data.main.temp_min;
  max.innerHTML = data.main.temp_max;
  min.style.margin = '10px';
  if(data.main.temp > 40){
    icon.src = 'https://cdn-icons-png.flaticon.com/128/7670/7670662.png';
  }else if(data.main.temp > 30){
    icon.src =  'https://cdn-icons-png.flaticon.com/128/1684/1684426.png' ;
  }else{
    icon.src = 'https://cdn-icons-png.flaticon.com/128/6711/6711044.png';
  }
}

search.addEventListener('click',getWeatherReport);
