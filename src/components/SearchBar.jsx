// components/SearchBar.jsx
import React, { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import { Search } from 'lucide-react';

const SearchBar = ({ onSearchComplete }) => {
  const { setSearchText } = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setSearchText(trimmed);
    setInput("");
    if (onSearchComplete) {
      onSearchComplete();
    }
  };

  return (
    <div className="relative w-full md:w-1/4">
      <input
        type="text"
        placeholder="Search..."
        value={input}
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
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
