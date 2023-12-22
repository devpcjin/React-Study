import { Layout, Breadcrumb } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export default function RootContent() {
    return (
        <>
            <Breadcrumb className="mb-4">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="min-h-[280px] rounded-lg bg-white p-6">
                <Outlet />
            </Content>
        </>
    );
}
