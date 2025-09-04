// context/SearchContext.jsx
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchText, setSearchText] = useState("Hyderabad");
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState();
    const [isLoadingWeather, setIsLoadingWeather] = useState(false);
    const [err,setErr] = useState(false);

    const fetchWeather = async () => {
        if (!location) return;
        setIsLoadingWeather(true);
        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto&forecast_days=6`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("API response:", data);

            if (data && data.hourly && data.current && data.daily) {
                setWeather({
                    hourly: data.hourly,
                    current: data.current,
                    daily: data.daily,
                });
            } else {
                console.warn("Unexpected data format:", data);
                setWeather(null);
            }
        } catch (error) {
            console.error("Error fetching weather:", error);
            setWeather(null);
        } finally {
            setIsLoadingWeather(false);
        }
    };

    const fetchLocation = async () => {
        if (!searchText.trim()) return;
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText},IN&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
            if (!response.ok) {
                setErr(true);
                throw new Error(`sai error! status: ${response.status}`);
            }
            const data = await response.json();
            setLocation({ lon: data.coord.lon, lat: data.coord.lat });
            // setSearchText("");
            setErr(false)
        } catch (err) {
            console.error(err);
            setSearchText("")
            toast.error(`Enter valid City name`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    useEffect(() => {
        fetchLocation();
    }, [searchText]); // Changed to trigger on searchText changes

    useEffect(() => {
        fetchWeather();
    }, [location]);

    return (
        <SearchContext.Provider value={{ searchText, setSearchText, location, fetchLocation, weather, isLoadingWeather,err }}>
            {children}
        </SearchContext.Provider>
    );
}