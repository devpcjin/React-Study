import { useState } from "react";
import { Menu } from "antd";
import { navigationItem } from "@/utils/navigation/index.js";

export default function Navigation(props) {
    const [current, setCurrent] = useState("");

    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    return (
        <>
            <Menu
                className="w-full"
                onClick={onClick}
                selectedKeys={[current]}
                theme={props.theme}
                mode={props.mode}
                items={props.items}
            />
        </>
    );
}

Navigation.defaultProps = {
    theme: "dark",
    items: navigationItem,
    mode: "horizontal",
};
