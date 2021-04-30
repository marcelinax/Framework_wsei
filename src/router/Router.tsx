import { BrowserRouter, Route } from "react-router-dom";
import React, { FC, useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { getComments } from "../store/commentsStore";
import { getNewUser } from "../store/userStore";
import { getPhotos } from "../store/photosStore";
import { getPosts } from "../store/postsStore";
import { getUsers } from "../store/secondaryUserStore";
import { routes } from "./routes";
import { useDispatch } from "react-redux";

const Router: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNewUser().then((u) => dispatch(u));
  }, []);

  useEffect(() => {
    getPosts().then((p) => dispatch(p));
  }, []);

  useEffect(() => {
    getUsers().then((u) => dispatch(u));
  }, []);

  useEffect(() => {
    getPhotos().then((p) => dispatch(p));
  }, []);

  useEffect(() => {
    getComments().then((c) => dispatch(c));
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
