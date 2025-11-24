import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Segmented } from "antd";
import VideosList from "../components/VideosList";

const Results = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <p>Видео по запросу "чем кормить кота" 7230</p>
                <Segmented
                    options={[
                        { value: "List", icon: <BarsOutlined /> },
                        { value: "Kanban", icon: <AppstoreOutlined /> }
                    ]}
                />
            </div>

            <VideosList />
        </>
    );
};

export default Results;
