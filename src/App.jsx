import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card"; // Adjust import as necessary
import NavBar from "./components/NavBar"; // Adjust import as necessary

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://freetestapi.com/api/v1/cars");
      setData(response.data);
      setFilteredData(response.data); // Set initial filtered data
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar data={data} setFilteredData={setFilteredData} />
      <Card data={filteredData} />
    </>
  );
};

export default App;
