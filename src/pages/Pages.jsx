import { Home } from "./Home";
import { Cuisine } from "./Cuisine";
import { Searched } from "./Searched";
import { Recipe } from "./Recipe";
import { Route, Routes } from "react-router-dom";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:category" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
};
