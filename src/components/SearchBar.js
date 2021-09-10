import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = ({ searchTerm, setSearchTerm, setResults }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyBIl3tydcI-94-be7djvoLGzQzj1KGslyg`
    );
    const books = await res.json()
    setResults(books.items)
    setSearchTerm('')
  };
  return (
    <div className="search-container">
      <h1>BookSearch</h1>
      <div className="input-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for any book..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <BiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
