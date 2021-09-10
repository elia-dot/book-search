import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  setResults,
  suggestion,
  setSuggestion,
}) => {
  
  const search = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`
    );
    const books = await res.json();
    setResults(books.items);
    setSearchTerm('');
  };

  const findSuggestion = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=3&key=${process.env.REACT_APP_API_KEY}`
    );
    const titles = await res.json();
    setSuggestion(titles.items);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') setSuggestion('');
    else if (e.target.value.length >= 2) {
      findSuggestion();
    }
  };

  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    search();
    setSuggestion('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== '') {
      search();
    }

    setSuggestion('');
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
            onChange={handleChange}
          />
          <button type="submit" className="search-btn">
            <BiSearch />
          </button>
        </form>
        <div className="suggestion">
          {suggestion && suggestion.length > 1
            ? suggestion.map((item) => (
                <div
                  className="row"
                  key={item.id}
                  onClick={() => handleSuggestionClick(item.volumeInfo.title)}
                >
                  {item.volumeInfo.title}
                </div>
              ))
            : ''}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
