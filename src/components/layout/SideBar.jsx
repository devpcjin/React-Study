import { Layout } from "antd";
import SideNavigation from "@/components/layout/SideNavigation";
const { Sider } = Layout;

export default function SideBar(props) {
    return (
        <Sider className="!w-[230] !max-w-[230px] !flex-1" theme="dark">
            <SideNavigation mode="inline" items={props.item} theme="dark" />
        </Sider>
    );
}
