import Section3 from "@/components/chapter3/Section3";
import { useParams, useNavigate } from "react-router-dom";
import { studySidebarItem } from "@/utils/navigation";

export default function Chapter3() {
    const { id } = useParams();

    const getSectionTitle = () => {
        const chapter3 = getChapterTitle();

        return chapter3.children.find((element) => element.key === id).label;
    };

    const getChapterTitle = () => {
        return studySidebarItem.find(
            (element) => element.key === "/study/chapter3"
        );
    };

    return (
        <>
            <div className="mb-10">
                <p className="text-3xl font-bold">{getChapterTitle().label}</p>
            </div>
            <div className="border-b-2 pb-2">
                <h2 className="text-xl font-bold">{getSectionTitle()}</h2>
            </div>
            {id === "3" && <Section3 />}
        </>
    );
}
