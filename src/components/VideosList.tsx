import { Image, List, Skeleton } from "antd";

import useTypedSelector from "../hooks/useTypedSelector";
import type { VideoItem } from "../constants/types";

const VideosList = () => {
    const { videos, isLoading } = useTypedSelector((state) => state.videos);
    return (
        <List
            itemLayout="horizontal"
            dataSource={videos}
            renderItem={(item: VideoItem) => (
                <List.Item key={item.id}>
                    {isLoading ? (
                        <Skeleton loading={isLoading} active avatar>
                            <List.Item.Meta
                                avatar={
                                    <Image
                                        style={{ width: "160px" }}
                                        src={item.image}
                                    />
                                }
                                title={
                                    <a
                                        href={`https://www.youtube.com/watch?v=${item.id}`}
                                        target="_blank"
                                    >
                                        {item.title}
                                    </a>
                                }
                                description={item.description}
                            />
                        </Skeleton>
                    ) : (
                        <List.Item.Meta
                            avatar={
                                <Image
                                    style={{ width: "160px" }}
                                    src={item.image}
                                />
                            }
                            title={
                                <a
                                    href={`https://www.youtube.com/watch?v=${item.id}`}
                                    target="_blank"
                                >
                                    {item.title}
                                </a>
                            }
                            description={item.description}
                        />
                    )}
                </List.Item>
            )}
        />
    );
};

export default VideosList;
