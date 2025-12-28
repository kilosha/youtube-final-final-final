import { Input } from "antd";
import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { useState, type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../ModalProvider";
import { getVideos } from "../redux/slices/videosSlice";

const MySearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const { videos } = useSelector((state) => state.videos);
    const { openModal } = useModal();
    const dispatch = useDispatch();
    const onSearch = async () => {
        dispatch(getVideos(searchValue));
    };

    const onHeartClick = () => {
        openModal("add", { query: searchValue });
    };

    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <Input.Search
            style={{ width: videos.length > 0 ? "100%" : "65%" }}
            placeholder="Что смотрим сегодня?"
            enterButton="Найти"
            size="large"
            suffix={
                videos.length > 0 ? (
                    <HeartOutlined onClick={onHeartClick} />
                ) : null
            } // ||  || <HeartTwoTone />}
            onSearch={onSearch}
            value={searchValue}
            onChange={onChangeSearchValue}
        />
    );
};

export default MySearch;
