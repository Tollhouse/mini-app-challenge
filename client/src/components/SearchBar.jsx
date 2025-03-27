import { useState } from 'react';

function SearchBar({ data }) {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const results = data.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
      <div>
        {filteredData.map((item, index) => (
          <p>{item.title}</p>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;