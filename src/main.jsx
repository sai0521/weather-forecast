import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "weather-icons/css/weather-icons.css";
import { SearchProvider } from './context/SearchContext.jsx';
// import "weather-icons/css/weather-icons-wind.css"; // optional for wind icons

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </StrictMode>,
)
