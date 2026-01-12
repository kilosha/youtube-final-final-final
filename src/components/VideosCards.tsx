import { Card, Col, Row, Skeleton } from "antd";

import useTypedSelector from "../hooks/useTypedSelector";
import type { VideoItem } from "../constants/types";

const VideosCards = () => {
    const { videos, isLoading } = useTypedSelector((state) => state.videos);

    return (
        <Row gutter={[20, 20]}>
            {videos.map((video: VideoItem) => {
                return (
                    <Col span={6}>
                        <Card
                            loading={isLoading}
                            style={{
                                height: "100%"
                            }}
                            cover={
                                isLoading ? (
                                    <Skeleton.Image
                                        active
                                        style={{
                                            width: "361px",
                                            height: "203px"
                                        }}
                                    />
                                ) : (
                                    <img
                                        draggable={false}
                                        alt="example"
                                        src={video.image}
                                    />
                                )
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
