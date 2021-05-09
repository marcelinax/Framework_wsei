import React, { FC } from "react";

import Icon from "../Icon";

const EntitiesListFilter: FC = () => {
  return (
    <div className="entities-filter">
      <p className="title">
        Rows are filtered by the following conditions starting from the top.
      </p>
      <div className="first-row">
        <Icon icon={"times-solid.svg"} size={20} />
        <p>Where</p>
        <button>
          Company
          <Icon icon={"arrow-down.svg"} size={10} />
        </button>
        <div className="select-box">
          <button>
            Contains
            <Icon icon={"arrow-down.svg"} size={10} />
          </button>
          <button className="input-btn">Type...</button>
        </div>
      </div>
      <div className="second-row">
        <Icon icon={"times-solid.svg"} size={20} />
        <p>Where</p>
        <button>
          Status
          <Icon icon={"arrow-down.svg"} size={10} />
        </button>
        <div className="select-box">
          <button>
            Is
            <Icon icon={"arrow-down.svg"} size={10} />
          </button>
          <button className="input-btn">Type...</button>
        </div>
        <div className="select-box">
          <button>
            In
            <Icon icon={"arrow-down.svg"} size={10} />
          </button>
          <button className="input-btn">Entity...</button>
        </div>
      </div>
      <div className="third-row">
        <Icon icon={"times-solid.svg"} size={20} />
        <p>Where</p>
        <button>
          Status
          <Icon icon={"arrow-down.svg"} size={10} />
        </button>
        <div className="select-box">
          <button>
            Ends before
            <Icon icon={"arrow-down.svg"} size={10} />
          </button>
          <button className="input-btn">Date</button>
        </div>
        <div className="select-box">
          <button>
            In
            <Icon icon={"arrow-down.svg"} size={10} />
          </button>
          <button className="input-btn">Entity...</button>
        </div>
      </div>
      <div className="fourth-row">
        <Icon icon={"plus-solid.svg"} size={20} />
        <p>Add filter</p>
        <button>
          choose property
          <Icon icon={"arrow-down.svg"} size={10} />
        </button>
      </div>
    </div>
  );
};

export default EntitiesListFilter;
