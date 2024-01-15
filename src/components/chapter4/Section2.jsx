import { useState } from "react";
import { Input, Button } from "antd";

const Section2 = () => {
    const [practice1, setPractice1] = useState({
        userName: "",
        message: "",
    });

    const onChangeParctice1 = (e) => {
        const { name, value } = e.target;

        setPractice1((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    };

    const onClickPractice1 = () => {
        alert(practice1.userName + ": " + practice1.message);
        setPractice1({
            userName: "",
            message: "",
        });
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClickPractice1();
        }
    };

    return (
        <>
            <div className="py-3 pl-4">
                <div className="py-2">
                    <h3 className="text-lg font-semibold">
                        4. input 여러 개 다루기 / 5. onKeyPress 이벤트 핸들링
                    </h3>
                    <div className="pl-4">
                        <div className="my-2 flex w-[500px] items-center justify-center gap-2">
                            <Input
                                className="w-[200px]"
                                placeholder="사용자명"
                                value={practice1.userName}
                                name="userName"
                                onChange={onChangeParctice1}
                            />
                            <Input
                                placeholder="아무거나 입력해보세요"
                                value={practice1.message}
                                name="message"
                                onChange={onChangeParctice1}
                                onKeyDown={onKeyPress}
                            />
                            <Button onClick={onClickPractice1}>확인</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section2;
