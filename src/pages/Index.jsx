import { Layout } from "antd";
import RootHeader from "@/components/layout/RootHeader.jsx";
import SideBar from "@/components/layout/SideBar";
import RootFooter from "@/components/layout/RootFooter";
import RootContent from "@/components/layout/RootContent";

export default function Index() {
    return (
        <Layout className="min-h-[100vh]">
            <RootHeader />
            <Layout>
                <SideBar />
                <Layout className="p-6">
                    <RootContent />
                    <RootFooter />
                </Layout>
            </Layout>
        </Layout>
    );
}
