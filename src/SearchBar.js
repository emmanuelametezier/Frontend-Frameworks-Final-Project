import React, { useState, useEffect, useContext } from 'react'
import data from './mockData.json';
import { useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext';


const SearchBar = () => {

  const params = useParams()
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const { setProducts, filterProducts } = useContext(ProductContext);

useEffect(() => {
  // function to fetch and filter the products depending on what is in the params
  async function fetch() {
    await filterProducts(params.filter).then((response) => {
      setProducts(response);
    });
  }
  fetch();
}, [params]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };


  const filterData = (searchTerm) => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />


      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};


export default SearchBar;

