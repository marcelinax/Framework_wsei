import React, { FC } from "react";

import Icon from "../Icon";

const ResumeWorkSortBy: FC = () => {
  return (
    <div className="sort-by">
      <Icon icon={"antenna.svg"} size={20} />
      <h5>Followed</h5>
      <Icon icon={"arrow-down.svg"} size={10} />
    </div>
  );
};

export default ResumeWorkSortBy;
