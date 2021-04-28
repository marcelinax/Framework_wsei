import React, { FC } from "react";

import Publication from "../../types/Publication";
import { RootState } from "../../store/rootStore";
import { User } from "../../types/User";
import { useSelector } from "react-redux";

interface Props {
  publication: Publication;
}

const LatestPublicationsItem: FC<Props> = ({ publication }) => {
  const user = useSelector<RootState, User>((store) => store.user);

  return (
    <div className="latest-publication-item">
      <div
        className="thumbnail"
        style={{ backgroundImage: `url(${publication.thumbnailUrl})` }}
      ></div>
      <div className="info">
        <h4>{publication.title}</h4>
        <p>
          {publication.date.toLocaleDateString()},
          <img
            src={user.picture.large}
            alt={publication.author.name}
            className="author-avatar"
          />
          {publication.author.name}
        </p>
      </div>
    </div>
  );
};

export default LatestPublicationsItem;
