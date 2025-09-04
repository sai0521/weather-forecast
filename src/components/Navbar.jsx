import React, { useState, useEffect, useContext } from 'react'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { searchText } = useContext(SearchContext);

  // to update the time for every 1 sec
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });// getting only hour and minute (HH:MM)
  const day = currentTime.toLocaleDateString([], { weekday: "long" });// only getting day (monday , tuesday ,,e.t.c)


  return (
    <div>
      <div className="p-8 bg-white/30 backdrop-blur-md flex flex-col items-center justify-between md:flex-row gap-5 md:max-h-[80px]">
        {/** Displays time in nav bar */}
        <div className='flex flex-row w-full md:w-3/4 justify-between items-center'>
          <div className='text-white'>
            <p className='text-2xl font-semibold'>{time}</p>
            <p>{day}</p>
          </div>

          {/* to display current location */}
          <div className='text-white font-semibold'>
            <p>{searchText}</p>
          </div>
        </div>

        {/** Search bar component */}
        <SearchBar />
      </div>
    </div>
  )
}

export default Navbar
