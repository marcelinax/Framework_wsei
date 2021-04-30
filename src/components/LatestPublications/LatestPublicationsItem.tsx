import React, { FC } from "react";

import Publication from "../../types/Publication";
import { RootState } from "../../store/rootStore";
import { User } from "../../types/User";
import moment from "moment";
import { useSelector } from "react-redux";

interface Props {
  publication: Publication;
  isBigCard?: boolean;
}

const LatestPublicationsItem: FC<Props> = ({ publication, isBigCard }) => {
  const user = useSelector<RootState, User>((store) => store.user);

  return (
    <div className={isBigCard ? "latest-post-card" : "latest-publication-item"}>
      <div
        className="thumbnail"
        style={{ backgroundImage: `url(${publication.thumbnailUrl})` }}
      ></div>
      <div className="details-box">
        <h4>{publication.title}</h4>
        <div className="info-box">
          <p className="date">
            {moment(publication.date).format("D MMM. YYYY")}
          </p>
          <img
            src={user.picture.large}
            alt={publication.author.name}
            className="author-avatar"
          />
          <p className="author-name">{publication.author.name}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestPublicationsItem;
