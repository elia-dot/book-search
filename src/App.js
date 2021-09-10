import React, { useState } from 'react';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [suggestion, setSuggestion] = useState('');
  return (
    <div className="App">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        results={results}
        setResults={setResults}
        suggestion={suggestion}
        setSuggestion={setSuggestion}
      />
      {results.length > 0 ? (
        <Cards results={results} />
      ) : (
        <div className="placeholder">
          <div>
            <p>Nothing to show here!</p>
            <br/>
            <p>Search for a book and find the results here.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
