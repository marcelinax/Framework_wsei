import React, { FC } from "react";

import LatestPublications from "../components/LatestPublications/LatestPublications";
import ResumeWorkList from "../components/ResumeWork/ResumeWorkList";
import Workspaces from "../components/Workspaces/Workspaces";

const HomePage: FC = () => {
  return (
    <div>
      <LatestPublications />
      <Workspaces />
      <ResumeWorkList></ResumeWorkList>
    </div>
  );
};

export default HomePage;
