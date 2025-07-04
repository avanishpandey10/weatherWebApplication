# 🌦️ Weather Web App

This is a simple Weather Web App built using **HTML**, **CSS**, and **JavaScript**, which fetches real-time weather data using the [WeatherAPI](https://www.weatherapi.com/) service.

---

## 🔑 How to Get a WeatherAPI Key

1. Visit [https://www.weatherapi.com](https://www.weatherapi.com/).
2. Click on the **Sign Up** button to create a free account.
3. After verifying your email, log in to your WeatherAPI dashboard.
4. Copy the API key provided in your account.

---

## 🔧 How to Use

1. Clone or download this repository.

2. Open the `script.js` (or wherever you're calling the API) and replace the placeholder API key with your own.

### Example:
```javascript
const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=yourAPIWeatherKey&q=${cityy}`); // Replace this with your actual API key
