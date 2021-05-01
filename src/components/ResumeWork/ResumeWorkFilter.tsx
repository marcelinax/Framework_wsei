import React, { FC } from "react";

const ResumeWorkFilter: FC = () => {
  return (
    <div className="filter">
      <input type="text" placeholder="Filter by search..." />
      <img src="media/icons/search.svg" alt="search" className="icon" />
    </div>
  );
};

export default ResumeWorkFilter;
