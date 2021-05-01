import "./resumeWork.scss";

import React, { FC, useState } from "react";

import { Comment } from "../../types/Comment";
import Pagination from "./Pagination";
import { Photo } from "../../types/Photo";
import { Post } from "../../types/Post";
import ResumeWorkFilter from "./ResumeWorkFilter";
import ResumeWorkListItem from "./ResumeWorkListItem";
import ResumeWorkSortBy from "./ResumeWorkSortBy";
import { RootState } from "../../store/rootStore";
import { SecondaryUser } from "../../types/SecondaryUser";
import { useSelector } from "react-redux";

const ResumeWorkList: FC = () => {
  const users = useSelector<RootState, SecondaryUser[]>((store) => store.users);
  const comments = useSelector<RootState, Comment[]>((store) => store.comments);
  const posts = useSelector<RootState, Post[]>((store) => store.posts);
  const photos = useSelector<RootState, Photo[]>((store) => store.photos);

  const [filterQuery, setFilterQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);

  const renderResumeWorks = () => {
    if (
      posts.length > 0 &&
      users.length > 0 &&
      photos.length > 0 &&
      comments.length > 0
    ) {
      return comments
        .filter((c) =>
          c.name.toLocaleLowerCase().includes(filterQuery.toLocaleLowerCase())
        )
        .filter(
          (_, index) => index > (page - 1) * pageSize && index < page * pageSize
        )
        .map((comment) => (
          <ResumeWorkListItem
            key={comment.id}
            icon={"file.svg"}
            title={comment.name}
            date={new Date()}
            userName={users[0].name}
            contract={
              comment.id % 3 === 0 ? "Client contract" : "Supplier contract"
            }
            companyName={users[0].company.name}
            companyLogoUrl={
              photos.filter((photo) => photo.id === comment.id)[0].url
            }
            content={comment.body}
          ></ResumeWorkListItem>
        ));
    } else return "";
  };

  return (
    <>
      <div className="resume-work-menu">
        <h2>Resume your work</h2>
        <div className="resume-work-menu-right">
          <ResumeWorkFilter
            filterQuery={filterQuery}
            setFilter={setFilterQuery}
          />
          <ResumeWorkSortBy />
        </div>
      </div>

      <div className="resume-work-list">{renderResumeWorks()}</div>
      <Pagination
        currentPage={page}
        pageSize={pageSize}
        totalPage={comments.length}
        setPage={setPage}
      />
    </>
  );
};

export default ResumeWorkList;
