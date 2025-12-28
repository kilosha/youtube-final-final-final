import { Card, Col, Row } from "antd";
import { useSelector } from "react-redux";

const VideosCards = () => {
    const videos = useSelector((state) => state.videos.videos);

    return (
        <Row gutter={[20, 20]}>
            {videos.map((video) => {
                return (
                    <Col span={6}>
                        <Card
                            cover={
                                <img
                                    draggable={false}
                                    alt="example"
                                    src={video.image}
                                />
                            }
                        >
                            <Card.Meta
                                title={video.title}
                                description={video.description}
                            />
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

export default VideosCards;
