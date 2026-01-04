import { Input } from "antd";
import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { useEffect, useState, type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../ModalProvider";
import { getVideos } from "../redux/slices/videosSlice";

const MySearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const { videos, query } = useSelector((state) => state.videos);
    const { openModal } = useModal();
    const dispatch = useDispatch();
    const onSearch = async () => {
        dispatch(getVideos({ query: searchValue }));
    };

    const onHeartClick = () => {
        openModal("add", { query: searchValue });
    };

    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        setSearchValue(query);
    }, [query]);

    return (
        <Input.Search
            style={{ width: videos.length > 0 ? "100%" : "65%" }}
            placeholder="Что смотрим сегодня?"
            enterButton="Найти"
            size="large"
            suffix={
                <HeartOutlined
                    style={{
                        visibility: searchValue ? "visible" : "hidden",
                        cursor: "pointer"
                    }}
                    onClick={onHeartClick}
                />
            } // ||  || <HeartTwoTone />}
            onSearch={onSearch}
            value={searchValue}
            onChange={onChangeSearchValue}
        />
    );
};

export default MySearch;
