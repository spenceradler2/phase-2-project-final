import React from "react";

function Search({ setTerm, term }) {
  function handleChangeSearch(e) {
    setTerm(e.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search for a person's travel plans:  </label>
      <input
        type="text"
        id="search"
        value={term}
        onChange={handleChangeSearch}
        placeholder="search..."
      />
    </div>
  );
}

export default Search;
