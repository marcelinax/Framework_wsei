import "./latestPublications.scss";

import React, { FC } from "react";

import LatestPublicationsItem from "./LatestPublicationsItem";
import { Link } from "react-router-dom";
import { Photo } from "../../types/Photo";
import { Post } from "../../types/Post";
import { RootState } from "../../store/rootStore";
import { User } from "../../types/User";
import { useSelector } from "react-redux";

const LatestPublications: FC = () => {
  const posts = useSelector<RootState, Post[]>((store) => store.posts);
  const users = useSelector<RootState, User[]>((store) => store.users);
  const photos = useSelector<RootState, Photo[]>((store) => store.photos);
  const loggedUser = useSelector<RootState, User>((store) => store.loggedUser);

  const renderLatestPost = () => {
    if (posts.length > 0 && users.length > 0 && photos.length > 0) {
      return (
        <LatestPublicationsItem
          userId={loggedUser.id}
          publication={{
            author: users[0],
            title: posts[0].title,
            date: new Date(),
            thumbnailUrl: photos[0].url,
          }}
          isBigCard={true}
        />
      );
    }
    return "";
  };

  const renderLatestPosts = () => {
    if (posts.length > 0 && users.length > 0 && photos.length > 0) {
      return posts.map((post, index) =>
        index < 4 && index > 0 ? (
          <LatestPublicationsItem
            userId={index}
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
      );
    }
    return "";
  };

  return (
    <>
      <div className="post-box-flex">
        {renderLatestPost()}
        <div className="latest-publications">
          <h2>Latest publications</h2>
          {renderLatestPosts()}

          <Link to="/publications" className="publications-link">
            See more publications
          </Link>
        </div>
      </div>
    </>
  );
};

export default LatestPublications;
