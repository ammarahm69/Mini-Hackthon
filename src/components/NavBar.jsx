import React, { useState } from "react";

const NavBar = ({ data, setFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterData(term, selectedOption);
  };

  const handleSelectChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    filterData(searchTerm, option);
  };

  const filterData = (term, option) => {
    let filtered = data;

    // Filter by search term
    if (term) {
      filtered = filtered.filter((item) =>
        item.make.toLowerCase().includes(term.toLowerCase())
      );
    }

    // Filter by selected option (adjust based on your data structure)
    if (option) {
      filtered = filtered.filter((item) => item.transmission === option); // Adjust as needed
    }

    // Update filtered data in the parent component
    setFilteredData(filtered);
  };

  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-3xl">Car Filter</h1>

      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="relative">
        <select
          className="px-4 py-2 rounded-md focus:outline-none"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="" selected>
            Select Company
          </option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
          <option value="CVT">CVT</option>
          {/* Add more options based on your data */}
        </select>
      </div>
    </div>
  );
};

export default NavBar;
