import React, { FC } from "react";

import EntitiesListSearch from "./EntitiesListSearch";
import Icon from "../Icon";

interface Props {
  onToogleFilters: () => void;
  filterQuery: string;
  onFilterChange: (filter: string) => void;
  isList: boolean;
  toggleList: (state: boolean) => void;
}

const EntitiesListButtons: FC<Props> = ({
  onToogleFilters,
  filterQuery,
  onFilterChange,
  toggleList,
  isList,
}) => {
  const toggleFullscreen = () => {
    console.log(document.querySelector(".container"));
    document.querySelector(".sidebar")?.classList.toggle("hide");
    document.querySelector("nav")?.classList.toggle("hide");
    document.querySelector("#root>.container")?.classList.toggle("fluid");
    document.querySelector(".content")?.classList.toggle("fullscreen");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(document.location.href);
  };

  return (
    <>
      <div className="top-options-box">
        <div className="left-side">
          <h3>Entities</h3>
          <Icon icon={"cog-solid.svg"} size={13} />
        </div>
        <div className="right-side">
          <button
            onClick={() => toggleList(false)}
            className={!isList ? "active" : ""}
          >
            <Icon icon={"th-large-solid.svg"} size={20} />
            {!isList && <p>Mosaic</p>}
          </button>
          <button
            onClick={() => toggleList(true)}
            className={isList ? "active" : ""}
          >
            <Icon icon={"bars-solid.svg"} size={20} />
            {isList && <p>List</p>}
          </button>
        </div>
      </div>
      <div className="bottom-options-box">
        <div className="options-left">
          <button className="button-with-bg">
            <Icon icon={"dot-circle-regular.svg"} size={16} />
            <p>All</p>
            <Icon icon={"arrow-down.svg"} size={11} />
          </button>
          <button>
            <Icon icon={"ellipsis-h-solid.svg"} size={16} />
          </button>
          <div className="divider"></div>
          <button className="button-with-margin">
            <Icon icon={"sort-solid.svg"} size={16} />
            <p>Sort</p>
          </button>
          <button onClick={onToogleFilters}>
            <Icon icon={"filter-solid.svg"} size={16} />
            <p>Filters</p>
          </button>
          <div className="divider"></div>
          <button onClick={toggleFullscreen}>
            <Icon icon={"expand-alt-solid.svg"} size={16} />
          </button>
          <div className="divider"></div>
          <button onClick={copyToClipboard}>
            <Icon icon={"share-solid.svg"} size={16} />
            <p>Share</p>
          </button>
        </div>
        <div className="options-right">
          <EntitiesListSearch
            searchQuery={filterQuery}
            setSearch={onFilterChange}
          />
          <button>
            <Icon icon={"antenna.svg"} size={20} />
            <p>Followed</p>
            <Icon icon={"arrow-down.svg"} size={11} />
          </button>
        </div>
      </div>
    </>
  );
};

export default EntitiesListButtons;
