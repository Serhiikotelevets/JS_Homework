// Основні налаштування
document.addEventListener('DOMContentLoaded', () => {
    updateWeatherForCity(); // Виклик функції при завантаженні сторінки
    submitCityButton.addEventListener('click', updateWeatherForCity);
});

const defaultCity = 'Kharkiv';
const apiKey = '145f1c8fb18664eb5a2270753d7fce62';
const apiUrl = 'https://api.openweathermap.org/data/2.5/';
const lang = 'ua';
const units = 'metric';

// DOM елементи
const cityInput = document.getElementById('cityInput');
const submitCityButton = document.getElementById('submitCity');
const outCityName = document.querySelector('.outCityName');
const forecastContainer = document.querySelector('.forecast-container');
const currentWeatherContainer = document.getElementById('currentWeather'); // Додано новий контейнер для погоди на сьогодні

// Функція для отримання погоди
function getWeather(city, type = 'weather') {
    if (!city) return console.error('Назва міста не вказана');

    const url = `${apiUrl}${type}?q=${city}&lang=${lang}&units=${units}&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Помилка отримання даних');
            return response.json();
        })
        .then(data => {
            if (type === 'weather') {
                displayCurrentWeather(data); // Змінено для відображення поточної погоди
                console.log(data);
            } else {
                displayWeatherForecast(data);
                // console.log(data);
            }
        })
        .catch(error => console.error('Помилка:', error));
}

// Функція для відображення поточної погоди
function displayCurrentWeather(data) {
    currentWeatherContainer.innerHTML = '';

    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const description = data.weather[0].description;
    const temp = `Температура: ${Math.round(data.main.temp)}°C`
    const feelsLike = `відчувається як ${Math.round(data.main.feels_like)}°C.`
    const humidity = ` Вологість: ${data.main.humidity}%. `;
    const pressure = `Тиск: ${Math.round(data.main.pressure * 0.75006375541921)} мм`; // Переведення тиску в мм.рт.ст.
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const windSpeed = `Швидкість вітру: ${Math.round(data.wind.speed)} м/с.`;
    const windGust = `Пориви вітру: ${Math.round(data.wind.gust ? data.wind.gust : 'н/д')} м/с.`; // Додано перевірку на наявність даних про пориви вітру
    const visibility = `Видимість: ${data.visibility / 1000} км.`;
    currentWeatherContainer.innerHTML = `
        <h2>Погода в ${data.name} ${data.sys.country} зараз: </h2>
        <h3>${temp}</h3>
        <p>${feelsLike}</p>
        <img src="${iconUrl}" alt="Погода" />
        <h4>${description}</h4>
        <p>${humidity}</p>
        <p>${pressure}</p>
        <p>${windSpeed}</p>
        <p>${windGust}</p>
        <p>${visibility}</p>
        <p>Світанок: ${sunrise}</p>
        <p>Захід сонця: ${sunset}</p>
    `;
}

// Функція для відображення прогнозу на 5 днів
function displayWeatherForecast(data) {
    forecastContainer.innerHTML = '';

    // Групування прогнозів по днях
    const forecastsByDay = data.list.reduce((acc, forecast) => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(forecast);
        return acc;
    }, {});

    Object.keys(forecastsByDay).forEach(date => {
        const forecasts = forecastsByDay[date];
        const dayContainer = document.createElement('div');
        dayContainer.classList.add('forecast-day');
        dayContainer.innerHTML = `<h3>${date}</h3>`;

        forecasts.forEach(forecast => {
            const time = new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const iconUrl = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
            const forecastElement = document.createElement('div');
            forecastElement.classList.add('forecast-item');
            forecastElement.innerHTML = `
                <div class="forecast-time">${time}</div>
                <img src="${iconUrl}" alt="Погода" />
                <div class="temp">${Math.round(forecast.main.temp)}°C</div>
                <div class="description">${forecast.weather[0].description}</div>
            `;
            dayContainer.appendChild(forecastElement);
        });

        forecastContainer.appendChild(dayContainer);
    });
}

// Функція для оновлення погоди
function updateWeatherForCity() {
    const city = cityInput.value || defaultCity;
    outCityName.innerHTML = city;
    getWeather(city);
    getWeather(city, 'forecast');
}