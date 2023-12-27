import { studySidebarItem } from "@/utils/navigation";
import { Card, Col, Row } from "antd";

export default function Study() {
    const getCards = () => {
        let result = [];
        studySidebarItem.forEach((element) => {
            result.push(
                <Col span={8}>
                    <Card title={element.label}>
                        {getChildren(element.children, element.key)}
                    </Card>
                </Col>
            );
        });

        return result;
    };

    const getChildren = (children, key) => {
        let childrenResult = [];
        children.forEach((element) => {
            childrenResult.push(
                <li className="mb-2 list-disc">
                    <a href={key + "/" + element.key}>{element.label}</a>
                </li>
            );
        });
        return <ul className="pl-5">{childrenResult}</ul>;
    };

    return (
        <>
            <Row gutter={[16, 24]}>{getCards()}</Row>
        </>
    );
}
