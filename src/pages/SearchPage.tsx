import { Input, Typography } from "antd";
import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import Results from "../components/Results";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../redux/slices/videosSlice";
import { responseFormatter } from "../utils/utils";

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState("");
    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };
    const { videos, totalResults } = useSelector((state) => state.videos);
    const dispatch = useDispatch();

    const onSearch = async () => {
        dispatch(getVideos(searchValue));
    };

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

            <Input.Search
                style={{ width: videos.length > 0 ? "100%" : "65%" }}
                placeholder="Что смотрим сегодня?"
                enterButton="Найти"
                size="large"
                suffix={videos.length > 0 ? <HeartOutlined /> : null} // ||  || <HeartTwoTone />}
                onSearch={onSearch}
                value={searchValue}
                onChange={(e) => onChangeSearchValue(e)}
            />

            {videos.length > 0 && <Results />}
        </div>
    );
};

export default SearchPage;
