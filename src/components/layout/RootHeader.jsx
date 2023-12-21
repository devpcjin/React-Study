import { Layout } from "antd";
import Navigation from "@/components/layout/Navigation.jsx";
import { headerNavigationItm } from "@/utils/navigation/index.js";

const { Header } = Layout;
export default function RootHeader() {
    return (
        <>
            <Header className="flex w-full items-center">
                <div className="h-8 w-[120px] rounded-lg bg-amber-300" />
                <Navigation
                    theme="dark"
                    mode="horizontal"
                    items={headerNavigationItm}
                />
            </Header>
        </>
    );
}
