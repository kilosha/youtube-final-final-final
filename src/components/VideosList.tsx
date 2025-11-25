import React from "react";

import { Image, List } from "antd";
import { responseFormatter } from "../utils/utils";
import { useSelector } from "react-redux";

const VideosList = () => {
    const data = useSelector((state) => state.videos.videos);
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
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
