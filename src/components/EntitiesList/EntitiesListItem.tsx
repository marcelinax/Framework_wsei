import React, { FC } from "react";

interface Props {
  title: string;
  address: string;
  imageUrl: string;
}

const EntitiesListItem: FC<Props> = ({ address, imageUrl, title }) => {
  return (
    <div className="entitles-list-item">
      <div className="entitles-list-item--inner">
        <div
          className="image"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
        <div className="info">
          <h5>{title}</h5>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default EntitiesListItem;
