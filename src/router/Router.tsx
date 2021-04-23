import { BrowserRouter, Route } from "react-router-dom";
import React, { FC } from "react";

import { routes } from "./routes";

const Router: FC = () => {
  return (
    <BrowserRouter>
      {routes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
        ></Route>
      ))}
    </BrowserRouter>
  );
};

export default Router;
