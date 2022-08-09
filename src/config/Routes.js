import React from "react";
import RandomQuoteMachine from "../pages/randomquotemachine/RandomQuoteMachine";
import MarkdownPreviewer from "../pages/markdownpreviewer/MarkdownPreviewer";
import DrumMachine from "../pages/drummachine/DrumMachine";
import { Routes, Route } from "react-router-dom";

const publicPath = [
  { path: "/randomquotemachine", component: RandomQuoteMachine },
  { path: "/markdownpreviewer", component: MarkdownPreviewer },
  { path: "/drummachine", component: DrumMachine },
];

export const PublicRoutes = () => {
  return (
    <Routes>
      {publicPath.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={<route.component />} />
        );
      })}
    </Routes>
  );
};
