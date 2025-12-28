import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Segmented, Typography } from "antd";
import VideosList from "../components/VideosList";
import { useSelector } from "react-redux";
import { useState } from "react";
import VideosCards from "./VideosCards";

const { Text, Title } = Typography;

const Results = () => {
    const [selectedTab, setSelectedTab] = useState("List");
    const { totalResults, searchQuery } = useSelector((state) => state.videos);

    const onSelectionChange = (value: string) => {
        setSelectedTab(value);
    };

    return (
        <div
            style={{
                width: "100%"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    marginBottom: "15px"
                }}
            >
                <Title level={5} style={{ margin: "0" }}>
                    Видео по запросу
                    <Text style={{ fontSize: "16px" }} strong>
                        «{searchQuery}»
                    </Text>
                    <Text style={{ fontSize: "16px" }} type="secondary">
                        {totalResults}
                    </Text>
                </Title>
                <Segmented
                    options={[
                        { value: "List", icon: <BarsOutlined /> },
                        { value: "Kanban", icon: <AppstoreOutlined /> }
                    ]}
                    onChange={onSelectionChange}
                />
            </div>

            {selectedTab === "List" ? <VideosList /> : <VideosCards />}
        </div>
    );
};

export default Results;
