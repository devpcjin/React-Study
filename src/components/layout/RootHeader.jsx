import { Layout } from "antd";
import Navigation from "@/components/layout/Navigation.jsx";
import {
    headerNavigationItem,
    studySidebarItem,
} from "@/utils/navigation/index.js";

const { Header } = Layout;
export default function RootHeader() {
    return (
        <Header className="flex items-center">
            <div className="mr-16 h-8 w-[120px] rounded-lg bg-amber-300" />
            <Navigation
                theme="dark"
                mode="horizontal"
                items={headerNavigationItem}
            />
        </Header>
    );
}
