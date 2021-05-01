import React, { FC } from "react";

interface Props {
  filterQuery: string;
  setFilter: (filterQuery: string) => void;
}

const ResumeWorkFilter: FC<Props> = ({ filterQuery, setFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by search..."
        value={filterQuery}
        onChange={(e) => setFilter(e.target.value)}
      />
      <img src="media/icons/search.svg" alt="search" className="icon" />
    </div>
  );
};

export default ResumeWorkFilter;
