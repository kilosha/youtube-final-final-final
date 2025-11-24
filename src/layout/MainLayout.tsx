import { Layout, Menu, Button } from "antd";

const { Header, Content } = Layout;
import logo from "../assets/logo.svg";
import { Link, NavLink, Outlet } from "react-router";

const items = [
    {
        key: "search",
        label: <NavLink to="/search">Поиск</NavLink>
    },
    {
        key: "favorites",
        label: <NavLink to="/favorites">Избранное</NavLink>
    }
];

const MainLayout = () => {
    return (
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
                <Button type="text">
                    <Link to="/login">Выйти</Link>
                </Button>
            </Header>
            <Content
                style={{
                    margin: "0px 200px 0px 200px"
                }}
            >
                <Outlet />
            </Content>
        </Layout>
    );
};

export default MainLayout;
