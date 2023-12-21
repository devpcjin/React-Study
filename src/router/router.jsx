import Home from "@/components/Home";
import Navigation from "@/components/layout/Navigation.jsx";
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />}>
                <Route path="" element={<Home />}></Route>
            </Route>
        </Routes>
    );
};

export default Router;
