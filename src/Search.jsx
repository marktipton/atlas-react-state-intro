import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const performSearch = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchInput}
      onChange={performSearch}
    />
  );
}
