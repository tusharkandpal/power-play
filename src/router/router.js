import { Routes, Route } from "react-router-dom";
import { Home } from "../page/page";

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};
