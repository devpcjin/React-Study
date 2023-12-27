import { useState } from "react";
import { Input, Button } from "antd";
import MyComponent from "./MyComponent";

const Section3 = () => {
    const [myComponentValue, setMyComponentValue] = useState("");
    const [value2, setValue2] = useState("");
    const [childrenValue, setchildrenValue] = useState("");
    const [value4, setValue4] = useState("");

    const sendProps = () => {
        setValue2(myComponentValue);
        setMyComponentValue("");
    };

    const sendChildren = () => {
        setValue4(childrenValue);
        setchildrenValue("");
    };

    return (
        <>
            <div className="py-3 pl-4">
                <div className="py-2">
                    <h3 className="text-lg font-semibold">
                        2. 컴포넌트를 사용할 때 props 값 지정하기
                    </h3>
                    <div className="pl-4">
                        <div className="my-2 w-[400px]">
                            <Input
                                placeholder="컴포넌트로 전달할 값을 입력하세요."
                                suffix={
                                    <Button onClick={sendProps}>입력</Button>
                                }
                                onChange={(e) =>
                                    setMyComponentValue(e.target.value)
                                }
                                value={myComponentValue}
                            />
                        </div>
                        <div className="my-2">
                            <MyComponent value={value2} />
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-semibold">
                        3. props 기본값 설정: defaultProps
                    </h3>
                    <div className="pl-4">
                        <div className="my-2">
                            <MyComponent />
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-semibold">
                        4. 태그 사이의 내용을 보여주는 children
                    </h3>
                    <div className="pl-4">
                        <div className="my-2 w-[400px]">
                            <Input
                                placeholder="태그사이에 들어갈 값을 입력하세요."
                                suffix={
                                    <Button onClick={sendChildren}>입력</Button>
                                }
                                onChange={(e) =>
                                    setchildrenValue(e.target.value)
                                }
                                value={childrenValue}
                            />
                        </div>
                        <div className="my-2">
                            <MyComponent>{value4}</MyComponent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section3;
