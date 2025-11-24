import React from "react";

import { Image, List } from "antd";
import response from "../response";
import { responseFormatter } from "../utils/utils";

const VideosList = () => {
    const data = responseFormatter(response);
    return (
        <List
            itemLayout="horizontal"
            dataSource={data.items}
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
