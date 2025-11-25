import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Segmented } from "antd";
import VideosList from "../components/VideosList";
import { useSelector } from "react-redux";
import { useState } from "react";
import VideosCards from "./VideosCards";

const Results = () => {
    const [selectedTab, setSelectedTab] = useState("List");
    const totalResults = useSelector((state) => state.videos.totalResults);

    const onSelectionChange = (e) => {
        setSelectedTab(e);
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
                    marginTop: "10px"
                }}
            >
                <p>Видео по запросу "чем кормить кота" {totalResults}</p>
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
