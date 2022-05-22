import { Routes, Route } from "react-router-dom";
import { Home, Trending } from "../page/page";

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/trending" element={<Trending />}></Route>
    </Routes>
  );
};
