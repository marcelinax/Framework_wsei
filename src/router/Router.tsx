import { BrowserRouter, Route } from "react-router-dom";
import React, { FC, useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";
import { getNewUser } from "../store/userStore";
import { routes } from "./routes";
import { useDispatch } from "react-redux";

const Router: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNewUser().then((u) => dispatch(u));
  }, []);

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
