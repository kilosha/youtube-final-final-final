import { Input, Typography } from "antd";
import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState("");
    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    const onSearch = async () => {
        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${searchValue}&key=AIzaSyBcz3ou_HtnFnuVDX_RSXULiABuIXqtqCI&type=video`
        );
        const data = response.data;
        console.log(data);
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                // justifyContent: "center",
                height: "100%"
            }}
        >
            <Typography.Title style={{ marginTop: "220px" }}>
                Поиск видео
            </Typography.Title>
            <Input.Search
                style={{ marginTop: "20px", width: "65%" }}
                placeholder="Что смотрим сегодня?"
                enterButton="Найти"
                size="large"
                suffix={null} // || <HeartOutlined /> || <HeartTwoTone />}
                onSearch={onSearch}
                value={searchValue}
                onChange={(e) => onChangeSearchValue(e)}
            />
        </div>
    );
};

export default SearchPage;
