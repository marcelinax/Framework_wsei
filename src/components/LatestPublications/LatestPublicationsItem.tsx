import React, { FC } from "react";

import { Photo } from "../../types/Photo";
import Publication from "../../types/Publication";
import { RootState } from "../../store/rootStore";
import { User } from "../../types/User";
import { emptyPhoto } from "../../defaults/emptyPhoto";
import { emptyUser } from "../../defaults/emptyUser";
import moment from "moment";
import { useSelector } from "react-redux";

interface Props {
  publication: Publication;
  isBigCard?: boolean;
  userId: number;
}

const LatestPublicationsItem: FC<Props> = ({
  publication,
  isBigCard,
  userId,
}) => {
  const user =
    useSelector<RootState, User>((state) => state.users[userId]) || emptyUser;
  const userPhotoUrl =
    useSelector<RootState, Photo>(
      (store) => store.photos.filter((p) => p.id === userId)[0]
    ) || emptyPhoto;

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
            src={userPhotoUrl.url}
            alt={user.name}
            className="author-avatar"
          />
          <p className="author-name">{user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestPublicationsItem;
