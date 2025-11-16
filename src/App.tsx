import { ConfigProvider, Layout, Menu, Button } from "antd";

const { Header, Content } = Layout;
import logo from "./assets/logo.svg";
import "./App.css";
import MainPage from "./pages/MainPage";

const items = [
    {
        key: "search",
        label: "Поиск"
    },
    {
        key: "favorites",
        label: "Избранное"
    }
];

function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Layout: {
                            headerBg: "#FFFFFF"
                        }
                    }
                }}
            >
                <Layout
                    style={{
                        height: "inherit"
                    }}
                >
                    <Header
                        style={{
                            display: "flex",
                            alignItems: "center",
                            borderBottom: "2px solid rgba(5, 5, 5, 0.06)"
                        }}
                    >
                        <img src={logo} alt="logo" />
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={["search"]}
                            items={items}
                            style={{ flex: 1, minWidth: 0 }}
                        />
                        <Button type="text">Выйти</Button>
                    </Header>
                    <Content
                        style={{
                            margin: "0px 200px 0px 200px"
                        }}
                    >
                        <MainPage />
                    </Content>
                </Layout>
            </ConfigProvider>
        </>
    );
}

export default App;
