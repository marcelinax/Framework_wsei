import { BrowserRouter, Route } from "react-router-dom";
import React, { FC } from "react";

import Navbar from "../components/Navbar/Navbar";
import { routes } from "./routes";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        {routes.map((route, index) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={`route_${index}`}
          ></Route>
        ))}
      </div>
    </BrowserRouter>
  );
};

export default Router;
