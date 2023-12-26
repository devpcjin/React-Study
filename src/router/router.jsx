import Home from "@/components/Home";
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index.jsx";
import SideBarArea from "@/components/layout/SideBarArea";
import { homeSidebarItem, studySidebarItem } from "@/utils/navigation/index.js";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />}>
                <Route
                    path=""
                    element={<SideBarArea sideMenu={homeSidebarItem} />}
                >
                    <Route path="home" element={<Home />}></Route>
                </Route>
                <Route
                    path="study"
                    element={<SideBarArea sideMenu={studySidebarItem} />}
                >
                    <Route path="chapter2">
                        <Route path=":id" element={<Home />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
};

export default Router;
