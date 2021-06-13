import React, { FC } from "react";

import ResumeWorkList from "../components/ResumeWork/ResumeWorkList";
import WorkspaceCard from "../components/Workspace/WorkspaceCard";
import WorkspaceHello from "../components/Workspace/WorkspaceHello";
import WorkspaceListMenu from "../components/Workspace/WorkspaceListMenu";

const SupplierContractPage: FC = () => {
  return (
    <div>
      <WorkspaceHello
        icon="file.svg"
        title="Supplier contract"
      ></WorkspaceHello>
      <div className="workspace-cards">
        <WorkspaceCard
          title="Explore your entities"
          text="Take a few minutes to look at the most important elements and specificities of your entities."
          icon="entities.svg"
        ></WorkspaceCard>
        <WorkspaceCard
          title="Structure the ownership"
          text="Get a clear view of the ownership by looking at the reations between individuals and entities."
          icon="project-diagram-solid.svg"
        ></WorkspaceCard>
        <WorkspaceCard
          title="Define the calendar"
          text="Prepare future events by creating detailed plans around the life of your entity."
          icon="calendar-alt-regular.svg"
        ></WorkspaceCard>
      </div>
      <WorkspaceListMenu></WorkspaceListMenu>
      <ResumeWorkList filterHide></ResumeWorkList>
    </div>
  );
};

export default SupplierContractPage;
