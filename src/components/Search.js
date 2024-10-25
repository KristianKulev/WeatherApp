import React from "react";

function Search({ onInput, inputVal, onError, onSearch }) {
  const handleSearch = () => {
    if (inputVal.trim() === "") {
      onError("Please enter a valid city.");
      return;
    }
    onSearch();
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => onInput(e.target.value)}
        placeholder="Enter city"
        className="flex-auto px-4 py-2 border border-gray-300 rounded-l focus:outline-none min-w-0"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
