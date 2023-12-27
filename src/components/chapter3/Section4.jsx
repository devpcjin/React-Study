import { useState } from "react";
import { Input, Button } from "antd";
import MyComponent from "./MyComponent";

const Section4 = () => {
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
            </div>
        </>
    );
};

export default Section4;
