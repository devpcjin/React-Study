import { Layout } from "antd";
import Navigation from "./Navigation";
const { Sider } = Layout;
import { studySidebarItem } from "@/utils/navigation";

export default function SideBar() {
    return (
        <Sider className="!w-[230] !max-w-[230px] !flex-1" theme="dark">
            <Navigation mode="inline" items={studySidebarItem} theme="dark" />
        </Sider>
    );
}
