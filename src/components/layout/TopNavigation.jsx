import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { headerNavigationItem } from "@/utils/navigation/index.js";

export default function TopNavigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const [current, setCurrent] = useState("4");

    useEffect(() => {
        const currentPath = location.pathname;
        const test = headerNavigationItem.find((element) =>
            element.key.startsWith("/" + currentPath.split("/")[1])
        );

        setCurrent(test.key);
    }, []);

    const onClick = ({ key }) => {
        if (key && key.startsWith("/")) {
            navigate(key);
            setCurrent(key);
        }
    };

    return (
        <>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                theme="dark"
                mode="horizontal"
                items={headerNavigationItem}
            />
        </>
    );
}
