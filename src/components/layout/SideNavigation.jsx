import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Menu } from "antd";
import { navigationItem } from "@/utils/navigation/index.js";

export default function SideNavigation(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const [current, setCurrent] = useState("");

    useEffect(() => {
        const currentPath = location.pathname;

        if (id) {
            setCurrent(id);
        } else {
            setCurrent(currentPath);
        }
    }, []);

    const onClick = ({ key, keyPath }) => {
        if (key) {
            if (key.startsWith("/")) {
                navigate(key);
                setCurrent(key);
            } else {
                navigate(keyPath[1] + "/" + key);
                setCurrent(key);
            }
        }
    };

    return (
        <>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                theme={props.theme}
                mode={props.mode}
                items={props.items}
            />
        </>
    );
}

SideNavigation.defaultProps = {
    theme: "light",
    items: navigationItem,
    mode: "horizontal",
};
