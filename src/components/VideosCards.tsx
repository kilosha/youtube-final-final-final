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
                            style={{
                                height: "100%"
                            }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="example"
                                    src={video.image}
                                />
                            }
                        >
                            <Card.Meta
                                title={
                                    <a
                                        href={`https://www.youtube.com/watch?v=${video.id}`}
                                        target="_blank"
                                    >
                                        {video.title}
                                    </a>
                                }
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
