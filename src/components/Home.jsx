import reactLogo from "@/assets/react.svg";
import { Button } from "antd";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <p className="p-10 text-2xl text-blue-900">안녕하세요</p>
                <p className="p-10 text-lg text-blue-600">
                    리액트 스터디 페이지 입니다.
                </p>
                <img src={reactLogo} className="h-80 w-80" />
            </div>
            <div className="my-20 flex items-center justify-center">
                <Button href="/study">Study 페이지로 이동...</Button>
            </div>
        </>
    );
}
