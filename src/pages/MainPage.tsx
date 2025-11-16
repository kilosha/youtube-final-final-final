import { Input, Typography } from "antd";

const MainPage = () => {
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
                //onSearch={onSearch}
            />
        </div>
    );
};

export default MainPage;
