import Section4 from "@/components/chapter2/Section4";
import { useParams } from "react-router-dom";

export default function Chapter2() {
    const { id } = useParams();

    return (
        <>
            <div className="mb-10">
                <p className="text-3xl font-bold">Chapter 2. JSX</p>
            </div>
            {id === "2-4" && <Section4 />}
        </>
    );
}
