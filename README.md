# 🌤️ Weather Dashboard

A modern, responsive weather dashboard built with React that provides real-time weather information, hourly forecasts, and 5-day predictions with beautiful visual representations.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-yellow)
![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange)
![OpenMeteo](https://img.shields.io/badge/OpenMeteo-API-lightgrey)

## ✨ Features

- **Real-time Weather Data**: Current temperature, humidity, precipitation, and wind speed
- **Dynamic Backgrounds**: Changes based on current weather conditions
- **Hourly Forecast**: 8-hour weather prediction with visual icons
- **5-Day Forecast**: Extended weather outlook
- **City Search**: Search for weather information by city name
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Live Clock**: Displays current time and day
- **Weather Icons**: Beautiful weather-themed icons from Weather Icons library
- **Error Handling**: Toast notifications for invalid city names

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React & Weather Icons
- **HTTP Client**: Native Fetch API
- **Notifications**: React Toastify
- **Weather APIs**: 
  - OpenWeather API (for geocoding)
  - Open-Meteo API (for weather data)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your OpenWeather API key:
```env
VITE_API_KEY=your_openweather_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## 🚀 Usage

1. **View Current Weather**: The dashboard automatically loads weather for Hyderabad by default
2. **Search for Cities**: Use the search bar in the navbar to find weather for any city
3. **Navigate Forecasts**: 
   - View hourly predictions in the horizontally scrollable section
   - Check the 5-day forecast below
4. **Weather Details**: See feels-like temperature, humidity, precipitation, and wind speed in the left panel

## 📁 Project Structure

```
src/
├── components/
│   ├── WeatherDashboard.jsx  # Main dashboard layout
│   ├── Navbar.jsx            # Navigation with search and clock
│   ├── SearchBar.jsx         # Search input component
│   ├── Weatherpanel.jsx      # Current weather details panel
│   ├── Hourlypanel.jsx       # Hourly forecast component
│   ├── Dailypanel.jsx        # Daily forecast component
│   └── getWeatherDescription.jsx # Weather description utility
├── context/
│   └── SearchContext.jsx     # React context for state management
├── App.jsx                   # Main application component
└── main.jsx                  # Application entry point
```

## 🔧 API Integration

This application uses two weather APIs:

1. **OpenWeather API**: For converting city names to geographic coordinates
2. **Open-Meteo API**: For retrieving comprehensive weather data including:
   - Current weather conditions
   - Hourly temperature forecasts
   - Daily weather predictions
   - Weather codes for icon mapping

## 🎨 Design Features

- **Glassmorphism UI**: Frosted glass effect on weather cards
- **Dynamic Backgrounds**: Background images change based on weather conditions
- **Responsive Layout**: Adapts to different screen sizes
- **Weather-Appropriate Colors**: Text and UI elements change based on weather conditions
- **Smooth Animations**: Loading spinner and transition effects

## 🌐 Weather Conditions Mapping

The application supports various weather conditions with appropriate icons and descriptions:

- Clear skies ☀️
- Partly cloudy ⛅
- Cloudy ☁️
- Foggy 🌫️
- Drizzle 🌧️
- Rain 🌧️
- Snow ❄️
- Thunderstorms ⚡

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Weather data provided by [Open-Meteo](https://open-meteo.com/)
- Geocoding services by [OpenWeather](https://openweathermap.org/)
- Icons by [Weather Icons](https://erikflowers.github.io/weather-icons/)
- UI icons by [Lucide](https://lucide.dev/)

---

⭐ Star this repo if you found it helpful!
