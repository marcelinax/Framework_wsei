import { BrowserRouter, Route } from "react-router-dom";
import React, { FC, useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
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
        <main>
          <Sidebar />
          <div className="content">
            {routes.map((route, index) => (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={`route_${index}`}
              ></Route>
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Router;
