import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Menu } from "antd";
import { navigationItem } from "@/utils/navigation/index.js";
import { Outlet } from "react-router-dom";

export default function Navigation() {
    const [current, setCurrent] = useState("");

    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    return (
        <>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={navigationItem}
            />
            <Outlet />
        </>
    );
}
