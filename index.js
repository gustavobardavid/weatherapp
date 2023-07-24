window.addEventListener('load' , () =>{

    function getWeatherData(cityName) {
        const apiKey = '35da98370d5072fe775a4bb544561701';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const cityElement = document.querySelector('.city');
                const dateElement = document.querySelector('.date');
                const tempElement = document.querySelector('.temp');
                const weatherElement = document.querySelector('.weather');
                const hiLowElement = document.querySelector('.hi-low');

                const city = data.name;
                const date = new Date().toLocaleDateString('pt-BR');
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                const tempMin = data.main.temp_min;
                const tempMax = data.main.temp_max;

                cityElement.textContent = city;
                dateElement.textContent = date;
                tempElement.innerHTML = `${temperature.toFixed(1)}<span>°C</span>`;
                weatherElement.textContent = weatherDescription;
                hiLowElement.textContent = `${tempMin.toFixed(1)}°C / ${tempMax.toFixed(1)}°C`;
            })
            .catch((error) => {
                console.error('Erro ao obter os dados da API:', error);
            });
    }

getWeatherData('Lavras da Mangabeira'); 

})