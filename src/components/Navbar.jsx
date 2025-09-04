import React, { useState, useEffect, useContext } from 'react'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { searchText } = useContext(SearchContext);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
  const day = currentTime.toLocaleDateString([], { weekday: "long" });


  return (
    <div>
      <div className="p-8 bg-white/30 backdrop-blur-md flex flex-col items-center justify-between md:flex-row gap-5 md:max-h-[80px]">

        <div className='flex flex-row w-full md:w-3/4 justify-between items-center'>
          <div className='text-white'>
            <p className='text-2xl font-semibold'>{time}</p>
            <p>{day}</p>
          </div>

          <div className='text-white font-semibold'>
            <p>{searchText}</p>
          </div>
        </div>

        <SearchBar />
      </div>
    </div>
  )
}

export default Navbar
