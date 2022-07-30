import React from "react";
import RandomQuoteMachine from "../pages/randomquotemachine/RandomQuoteMachine";
import { Routes, Route } from "react-router-dom";

const publicPath = [
  { path: "/", component: RandomQuoteMachine },
];

export const PublicRoutes = () => {
  return (
    <Routes>
      {publicPath.map((route,index) => {
        return (
          <Route key={index} path={route.path} element={<route.component/>} />
        );
      })}
    </Routes>
  );
};
