
async function getWeather() {
    const city = document.getElementById("city-input").value;
    const result = document.getElementById("weather-result");
    const apiKey = "YOUR_API_KEY"; // Replace with real key
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!res.ok) throw new Error("City not found");
        const data = await res.json();
        result.innerHTML = `<p>Temperature: ${data.main.temp}°C</p>
                            <p>Humidity: ${data.main.humidity}%</p>
                            <p>Wind Speed: ${data.wind.speed} m/s</p>`;
    } catch (err) {
        result.textContent = err.message;
    }
}
