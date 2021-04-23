import HomePage from "../views/HomePage";
import React from "react";

interface Route {
  component: React.FC;
  exact?: boolean;
  path: string;
}

export const routes: Route[] = [
  {
    component: HomePage,
    path: "/",
    exact: true,
  },
];
