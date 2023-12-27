import { useState } from "react";
import { Button } from "antd";

const Greet = () => {
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");
    const onClickEnter = () => {
        setMessage("안녕하세요!");
        setColor("text-blue-600");
    };
    const onClickLeave = () => {
        setMessage("안녕히 가세요!");
        setColor("text-red-600");
    };
    return (
        <div>
            <Button onClick={onClickEnter} className="mr-2">
                입장
            </Button>
            <Button onClick={onClickLeave}>퇴장</Button>
            <p className={color + " text-md mt-4 font-bold"}>{message}</p>
        </div>
    );
};

export default Greet;
