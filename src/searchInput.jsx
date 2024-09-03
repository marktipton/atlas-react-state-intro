import React from "react";

export default function Search({ searchInput, setSearchInput }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
