import React, { FC } from "react";

import Icon from "../Icon";
import { RootState } from "../../store/rootStore";
import { User } from "../../types/User";
import { useSelector } from "react-redux";

interface Props {
  updateSelectedUser: (userId: number) => void;
}

const ResumeWorkSortBy: FC<Props> = ({ updateSelectedUser }) => {
  const loggedUser = useSelector<RootState, User>((store) => store.loggedUser);
  return (
    <div>
      <div className="sort-by" onClick={() => updateSelectedUser(0)}>
        <Icon icon={"antenna.svg"} size={20} />
        <h5>All</h5>
        <Icon icon={"arrow-down.svg"} size={10} />
      </div>
      <div
        className="sort-by"
        onClick={() => updateSelectedUser(loggedUser.id)}
      >
        <Icon icon={"antenna.svg"} size={20} />
        <h5>May</h5>
        <Icon icon={"arrow-down.svg"} size={10} />
      </div>
      <div
        className="sort-by"
        onClick={() => updateSelectedUser(Math.ceil((loggedUser.id + 1) / 2))}
      >
        <Icon icon={"antenna.svg"} size={20} />
        <h5>Followed</h5>
        <Icon icon={"arrow-down.svg"} size={10} />
      </div>
    </div>
  );
};

export default ResumeWorkSortBy;
