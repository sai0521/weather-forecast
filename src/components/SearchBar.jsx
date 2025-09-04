// components/SearchBar.jsx
import React, { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import { Search } from 'lucide-react';

const SearchBar = () => {
  const { setSearchText } = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    const trimmed = input.trim(); //to avoid extra spaces
    if (!trimmed) return;
    setSearchText(trimmed);// setting text in context
    setInput("");
    
  };

  return (
    <div className="relative w-full md:w-1/4">

      <input
        type="text"  placeholder="Search..."  value={input}
        //on keyboard enter
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
        onChange={(e) => setInput(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
      />

      <button
        onClick={handleSearch}
        className="absolute inset-y-0 left-2 flex items-center text-white/80 hover:text-white"
      >

        {/**icon form lucid -react */}
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
