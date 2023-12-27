import { useState } from "react";
import { Input, Button } from "antd";
import MyComponent from "./MyComponent";
import Greet from "./Greet";
import ObjectState from "./ObjectState";

const Section4 = () => {
    return (
        <>
            <div className="py-3 pl-4">
                <div className="py-2">
                    <h3 className="text-lg font-semibold">
                        4. 함수 컨포넌트에서 useState 사용하기
                    </h3>
                    <div className="pl-4">
                        <div className="my-2">
                            <Greet />
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-semibold">
                        5. state를 사용할 때 주의 사항
                    </h3>
                    <div className="pl-4">
                        <div className="my-2">
                            <ObjectState />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section4;
