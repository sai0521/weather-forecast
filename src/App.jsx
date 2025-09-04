import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { SearchContext } from './context/SearchContext'
import WeatherDashboard from './components/WeatherDashboard'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const Map = {
    0: "/clearsky.jpg",           // Clear sky
    1: "/clearsky.jpg",  // Mainly clear
    2: "/cloudysky.jpg",          // Partly cloudy
    3: "/overcast.jpg",              // Overcast
    45: "/fog.jpg",                // Fog
    48: "/fog.jpg",                // Depositing rime fog
    51: "/rain.jpg",           // Light drizzle
    61: "/rain.jpg",            // Rain
    71: "/snow.jpg",               // Snow
    80: "/rain.jpg",               // Rain showers
    95: "/thunder.jpg",       // Thunderstorm
  }
  const { weather } = useContext(SearchContext);
  if (!weather || !weather.current || !weather.hourly) {
    return <></>
  }
  const img = Map[weather.current.weather_code];
  return (
    <div className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}>
      <Navbar />
      <WeatherDashboard />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>

  )
}

export default App
