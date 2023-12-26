import Section4 from "@/components/chapter2/Section4";
import { useParams } from "react-router-dom";

export default function Chapter2() {
    const { id } = useParams();

    return <>{id === "4" && <Section4 />}</>;
}
