import { Layout } from "antd";
import TopNavigation from "@/components/layout/TopNavigation.jsx";
import { headerNavigationItem } from "@/utils/navigation/index.js";

const { Header } = Layout;
export default function RootHeader() {
    return (
        <Header className="flex items-center">
            <div className="mr-16 h-8 w-[120px] rounded-lg bg-amber-300" />
            <TopNavigation />
        </Header>
    );
}
