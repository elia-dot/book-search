import React, { useState } from 'react';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        results={results}
        setResults={setResults}
      />
      {results.length > 0 && <Cards results={results} />}
    </div>
  );
}

export default App;
