import { Typography } from "antd";
import Results from "../components/Results";
import { useSelector } from "react-redux";
import MySearch from "../components/MySearch";

const SearchPage = () => {
    const { videos } = useSelector((state) => state.videos);

    return (
        <div
            style={{
                display: "flex",
                alignItems: videos.length > 0 ? "stretch" : "center",
                flexDirection: "column",
                // justifyContent: "center",
                height: "100%"
            }}
        >
            {videos.length > 0 ? (
                <Typography.Title level={2} style={{ marginTop: "40px" }}>
                    Поиск видео
                </Typography.Title>
            ) : (
                <Typography.Title
                    style={{ marginTop: "220px", marginBottom: "40px" }}
                >
                    Поиск видео
                </Typography.Title>
            )}

            <MySearch />

            {videos.length > 0 && <Results />}
        </div>
    );
};

export default SearchPage;
