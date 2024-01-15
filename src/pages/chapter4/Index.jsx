import { useParams } from "react-router-dom";
import { studySidebarItem } from "@/utils/navigation";
import Section2 from "@/components/chapter4/Section2";

export default function Chapter4() {
    const { id } = useParams();

    const getSectionTitle = () => {
        const chapter4 = getChapterTitle();

        return chapter4.children.find((element) => element.key === id).label;
    };

    const getChapterTitle = () => {
        return studySidebarItem.find(
            (element) => element.key === "/study/chapter4"
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
            {id === "4-2" && <Section2 />}
        </>
    );
}
