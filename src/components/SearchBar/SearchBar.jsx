import React from "react";

const SearchBar = ({ setSearchValue, value }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setSearchValue(form.elements.search.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" defaultValue={value} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
