import "./workspaces.scss";

import React, { FC, useRef } from "react";

import { Photo } from "../../types/Photo";
import { RootState } from "../../store/rootStore";
import Slider from "react-slick";
import WorkspacesItem from "./WorkspacesItem";
import { useSelector } from "react-redux";

const Workspaces: FC = () => {
  const photos = useSelector<RootState, Photo[]>((store) => store.photos);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getUserCount = () => {
    return Math.floor(Math.random() * 200);
  };

  const slideLeft = (left: boolean = false) => {
    if (sliderRef.current) {
      sliderRef.current.scroll({
        left: left
          ? sliderRef.current.scrollLeft - sliderRef.current.clientWidth
          : sliderRef.current.scrollLeft + sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="workspaces">
      <h2>Workspaces</h2>
      <div className="prev" onClick={() => slideLeft(true)}>
        <img src="media/icons/chevron-right-solid.svg" alt="" />
      </div>
      <div className="next" onClick={() => slideLeft(false)}>
        <img src="media/icons/chevron-right-solid.svg" alt="" />
      </div>
      {photos.length > 1000 && (
        <div className="slider" ref={sliderRef}>
          <WorkspacesItem
            to="client-contract"
            date={new Date("2021-04-25T07:10:00")}
            icon={"file.svg"}
            title={"Client contract"}
            photoUrl={photos[4069].url || ""}
            userCount={getUserCount()}
            shortcut={"Contract"}
          ></WorkspacesItem>
          <WorkspacesItem
            to="supplier-contract"
            date={new Date("2021-04-25T07:10:00")}
            icon={"file.svg"}
            title={"Supplier contract"}
            photoUrl={photos[20].url || ""}
            userCount={getUserCount()}
            shortcut={"Contract"}
          ></WorkspacesItem>
          <WorkspacesItem
            to="corporate"
            date={new Date("2021-04-25T07:10:00")}
            icon={"entities.svg"}
            title={"Corporate"}
            photoUrl={photos[2000].url || ""}
            userCount={getUserCount()}
            shortcut={"Corporate"}
          ></WorkspacesItem>
          <WorkspacesItem
            to="group-norms"
            date={new Date("2021-04-25T07:10:00")}
            icon={"book.svg"}
            title={"Group Norms"}
            photoUrl={photos[1999].url || ""}
            userCount={getUserCount()}
            shortcut={"Norms"}
          ></WorkspacesItem>
          <WorkspacesItem
            to="real-estate-contracts"
            date={new Date("2021-04-25T07:10:00")}
            icon={"file.svg"}
            title={"Real estate contracts"}
            photoUrl={photos[69].url || ""}
            userCount={getUserCount()}
            shortcut={"Contract"}
          ></WorkspacesItem>
        </div>
      )}
    </div>
  );
};

export default Workspaces;
