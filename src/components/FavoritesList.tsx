import React from "react";
import { Divider, List, Typography } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

const data = ["видео", "чем кормить кота", "Диана Пилат"];

const FavoritesList = () => (
    <>
        <List
            bordered
            dataSource={data}
            renderItem={(item) => (
                <List.Item actions={[<EditTwoTone />, <DeleteTwoTone />]}>
                    {item}
                </List.Item>
            )}
        />
    </>
);

export default FavoritesList;
