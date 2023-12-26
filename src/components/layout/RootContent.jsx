import { Layout, Breadcrumb } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export default function RootContent() {
    return (
        <>
            <Content className="min-h-[280px] rounded-lg bg-white p-6">
                <Outlet />
            </Content>
        </>
    );
}
