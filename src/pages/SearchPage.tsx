import { Typography } from "antd";
import Results from "../components/Results";
import MySearch from "../components/MySearch";
import useTypedSelector from "../hooks/useTypedSelector";

const SearchPage = () => {
    const { videos } = useTypedSelector((state) => state.videos);

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
