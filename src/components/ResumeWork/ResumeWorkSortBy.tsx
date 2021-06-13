import React, { FC } from "react";

import Icon from "../Icon";
import { RootState } from "../../store/rootStore";
import { User } from "../../types/User";
import { useSelector } from "react-redux";
import { useState } from "react";

interface Props {
  updateSelectedUser: (userId: number) => void;
}

const ResumeWorkSortBy: FC<Props> = ({ updateSelectedUser }) => {
  const loggedUser = useSelector<RootState, User>((store) => store.loggedUser);
  const [optionText, setOptionText] = useState("All");
  const [showOptions, setShowOptions] = useState(false);

  const renderSelectedOption = () => {
    return (
      <div
        className="sort-by"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <Icon icon={"antenna.svg"} size={20} />
        <h5>{optionText}</h5>
        <Icon icon={"arrow-down.svg"} size={10} />
      </div>
    );
  };

  return (
    <div className="resume-work-sort-by-dropdown-root">
      {renderSelectedOption()}
      {showOptions && (
        <div className="resume-work-sort-by-dropdown">
          <div
            className="sort-by"
            onClick={() => {
              setShowOptions(false);
              setOptionText("All");
              updateSelectedUser(0);
            }}
          >
            <Icon icon={"antenna.svg"} size={20} />
            <h5>All</h5>
          </div>
          <div
            className="sort-by"
            onClick={() => {
              setShowOptions(false);
              setOptionText("My");
              updateSelectedUser(loggedUser.id);
            }}
          >
            <Icon icon={"antenna.svg"} size={20} />
            <h5>My</h5>
          </div>
          <div
            className="sort-by"
            onClick={() => {
              setShowOptions(false);
              setOptionText("Followed");
              updateSelectedUser(Math.ceil((loggedUser.id + 1) / 2));
            }}
          >
            <Icon icon={"antenna.svg"} size={20} />
            <h5>Followed</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeWorkSortBy;
