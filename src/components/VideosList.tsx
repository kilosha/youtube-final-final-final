import { Image, List } from "antd";

import useTypedSelector from "../hooks/useTypedSelector";
import type { VideoItem } from "../constants/Types";

const VideosList = () => {
    const data = useTypedSelector((state) => state.videos.videos);
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item: VideoItem) => (
                <List.Item key={item.id}>
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
                </List.Item>
            )}
        />
    );
};

export default VideosList;
