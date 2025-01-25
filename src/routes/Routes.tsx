import React from "react";
import { Route, Routes } from "react-router";
import {
  Home,
  Categories,
  Contact,
  Favorites,
  Recipe,
} from "../presentation/pages";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Categories" element={<Categories />} />
    <Route path="/Recipe/:id" element={<Recipe />} />
    <Route path="/Favorites" element={<Favorites />} />
    <Route path="/Contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
