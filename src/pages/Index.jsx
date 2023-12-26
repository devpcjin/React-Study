import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import RootHeader from "@/components/layout/RootHeader.jsx";

export default function Index() {
    return (
        <Layout className="min-h-[100vh]">
            <RootHeader />
            <Layout>
                <Outlet />
            </Layout>
        </Layout>
    );
}
