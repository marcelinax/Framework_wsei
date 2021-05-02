import "./entitiesList.scss";

import React, { FC } from "react";

import EntitiesListItem from "./EntitiesListItem";
import { Photo } from "../../types/Photo";
import { RootState } from "../../store/rootStore";
import { useSelector } from "react-redux";

interface Props {
  filterQuery: string;
}

const EntitiesList: FC<Props> = ({ filterQuery }) => {
  const photos = useSelector<RootState, Photo[]>((store) => store.photos);

  return (
    <div className="entitles-list">
      {photos
        .filter(
          (p, i) =>
            p.title.toLowerCase().includes(filterQuery.toLowerCase()) && i < 24
        )
        .map((p, i) => (
          <EntitiesListItem
            address={"Caracas 1050, Distrito Capital, Venezuela"}
            imageUrl={p.url}
            title={i % 2 === 0 ? "Word company SAS" : "Subsid Comp Ltd"}
          />
        ))}
    </div>
  );
};

export default EntitiesList;
