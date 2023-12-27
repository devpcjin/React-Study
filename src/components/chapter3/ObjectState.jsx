import { Card, Col, Row, Button, Input } from "antd";
import { useState } from "react";

const ObjectState = () => {
    const [givenId, setGivenId] = useState(1);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [objectList, setObjectList] = useState([
        { id: 1, title: "제목1", content: "내용1" },
    ]);

    const getCards = () => {
        let cards = [];
        objectList.forEach((element) => {
            cards.push(
                <Col span={4} key={element.id}>
                    <Card
                        title={element.title}
                        className="!bg-blue-100"
                        extra={
                            <Button
                                danger
                                type="primary"
                                onClick={() => removeCard(element.id)}
                            >
                                삭제
                            </Button>
                        }
                    >
                        {element.content}
                    </Card>
                </Col>
            );
        });

        return cards;
    };

    const addCard = () => {
        if (validationCheck(title) && validationCheck(content)) {
            if (objectList.length < 6) {
                const newCard = {
                    id: givenId + 1,
                    title: title,
                    content: content,
                };
                setObjectList([...objectList, newCard]);
            } else {
                alert(
                    "최대 생성 개수는 6개입니다.\n 추가로 생성하려면 카드를 삭제하세요."
                );
            }
        } else {
            alert("값을 입력하세요.");
        }

        setGivenId(givenId + 1);
    };

    const removeCard = (id) => {
        setObjectList(objectList.filter((item) => item.id !== id));
    };

    const validationCheck = (value) => {
        if (value) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            <div className="my-2 flex gap-x-2">
                <Input
                    addonBefore="제목"
                    placeholder="제목을 입력하세요."
                    className="w-48"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <Input
                    placeholder="내용을 입력하세요."
                    className="w-48"
                    addonBefore="내용"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />
                <Button
                    className="!border-green-500 bg-green-500 text-white"
                    onClick={addCard}
                >
                    추가
                </Button>
            </div>

            <Row gutter={16}>{getCards()}</Row>
        </>
    );
};

export default ObjectState;
