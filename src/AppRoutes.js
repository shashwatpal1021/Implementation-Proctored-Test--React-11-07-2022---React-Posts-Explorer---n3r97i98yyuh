import React from "react";
import { Routes } from "react-router-dom";
import { Index } from "./Pages/Index";
import { Post } from "./Pages/Post";

export const AppRoutes = () => {
  return <Routes>
    <Route exact path="/" element={<Post/>}/>
    <Route exact path="/details/:id" element={<Details/>}/>
  </Routes>;
};
