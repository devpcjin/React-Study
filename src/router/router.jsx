import Home from "@/components/Home";
import Navigation from "@/components/Navigation";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
