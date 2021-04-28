import React, { FC } from "react";

import LatestPublicationsItem from "./LatestPublicationsItem";
import { Link } from "react-router-dom";
import { Photo } from "../../types/Photo";
import { Post } from "../../types/Post";
import { RootState } from "../../store/rootStore";
import { SecondaryUser } from "../../types/SecondaryUser";
import { useSelector } from "react-redux";

const LatestPublications: FC = () => {
  const posts = useSelector<RootState, Post[]>((store) => store.posts);
  const users = useSelector<RootState, SecondaryUser[]>((store) => store.users);
  const photos = useSelector<RootState, Photo[]>((store) => store.photos);

  return (
    <div className="latest-publications">
      <h2>Latest publications</h2>
      {posts.length > 0 &&
        users.length > 0 &&
        photos.length > 0 &&
        posts.map((post, index) =>
          index < 4 && index > 0 ? (
            <LatestPublicationsItem
              key={post.id}
              publication={{
                author: users.filter((user) => user.id === post.userId)[0],
                title: post.title,
                date: new Date(),
                thumbnailUrl: photos.filter((photo) => photo.id === post.id)[0]
                  .url,
              }}
            />
          ) : (
            ""
          )
        )}
      <Link to="/publications">See more publications</Link>
    </div>
  );
};

export default LatestPublications;
