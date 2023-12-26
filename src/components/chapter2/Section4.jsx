import { Input, Button } from "antd";
import { useState } from "react";

export default function Section4() {
    const [name, setName] = useState("");
    const [nameCheck, setNameCheck] = useState("");

    const inputName = () => {
        setNameCheck(name);
        setName("");
    };

    const undefinedName = undefined;

    return (
        <>
            <div className="border-b-2 pb-2">
                <h2 className="text-xl font-bold">Section4. JSX 문법</h2>
            </div>
            <div className="py-3 pl-4">
                <div className="my-2 w-80">
                    <Input
                        placeholder="이름을 입력하세요."
                        suffix={<Button onClick={inputName}>입력</Button>}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-semibold">
                        3. If 문 대신 조건부 연산자
                    </h3>
                    <div className="pl-4">
                        <div className="mt-4">
                            {nameCheck === "박철진" ? (
                                <h1>박철진 입니다.</h1>
                            ) : (
                                <h1>박철진이 아닙니다.</h1>
                            )}
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-semibold">
                        4. AND 연산자(&&)를 사용한 조건부 렌더링
                    </h3>
                    <div className="pl-4">
                        <div className="mt-4">
                            {nameCheck === "박철진" && <h1>박철진 입니다.</h1>}
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-semibold">
                        5. undefined를 렌더링하지 않기
                    </h3>
                    <div className="pl-4">
                        <div className="mt-4">
                            <div className="my-2">
                                <Button>undefined 해제</Button>
                            </div>
                            {undefinedName ||
                                "undefined 형식이여서 대신 해당 문구를 출력합니다."}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
