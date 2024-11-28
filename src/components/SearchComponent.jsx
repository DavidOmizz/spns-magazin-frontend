import React, { useState } from "react";
import axios from "axios";

const SearchComponent = () => {
  const [searchType, setSearchType] = useState("articles"); // Default search type
  const [searchTerm, setSearchTerm] = useState(""); // User's search input
  const [results, setResults] = useState([]); // Search results
  const [loading, setLoading] = useState(false); // Loading state

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm) return;

    setLoading(true);
    try {
      // Dynamic endpoint based on search type
    //   const url = `http://127.0.0.1:8000/api/${searchType}/?search=${searchTerm}`;
      const url = `https://spns-magazine-backend.onrender.com/api/${searchType}/?search=${searchTerm}`;
      const response = await axios.get(url);
      setResults(response.data); // Populate results
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Search</h1>
      <form onSubmit={handleSearch} className="flex flex-col space-y-4">
        {/* Dropdown to Select Search Type */}
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="articles">Articles</option>
          <option value="editions">Editions</option>
          <option value="contributors">Contributors</option>
          <option value="industry">Industry</option>
        </select>

        {/* Search Input */}
        <input
          type="text"
          placeholder={`Search ${searchType}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded"
        />

        {/* Search Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Display Results */}
      <div className="mt-4">
        {results.length > 0 ? (
          <ul>
            {results.map((result) => (
              <li key={result.id} className="border-b p-2">
                <h2 className="font-bold">{result.name || result.title}</h2>
                <p>{result.description || result.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
