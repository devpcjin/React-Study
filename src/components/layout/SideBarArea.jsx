import { Layout } from "antd";
import SideBar from "@/components/layout/SideBar";
import RootFooter from "@/components/layout/RootFooter";
import RootContent from "@/components/layout/RootContent";

export default function SideBarArea(props) {
    return (
        <>
            <SideBar item={props.sideMenu} />
            <Layout className="p-6">
                <RootContent />
                <RootFooter />
            </Layout>
        </>
    );
}
