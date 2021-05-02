import React, { FC } from "react";

interface Props {
  searchQuery: string;
  setSearch: (searchQuery: string) => void;
}

const EntitiesListSearch: FC<Props> = ({ searchQuery, setSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearch(e.target.value)}
      />
      <img src="media/icons/search.svg" alt="search" className="icon" />
    </div>
  );
};

export default EntitiesListSearch;
