import { Layout, Menu, Button } from "antd";

const { Header } = Layout;
import logo from "../assets/logo.svg";
import { NavLink, useLocation } from "react-router";
import { logout } from "../redux/slices/authSlice";
import useAppDispatch from "../hooks/useAppDispatch";

const items = [
    {
        key: "/search",
        label: <NavLink to="/search">Поиск</NavLink>
    },
    {
        key: "/favorites",
        label: <NavLink to="/favorites">Избранное</NavLink>
    }
];
const MyHeader = () => {
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
        //navigate("/login");
    };

    return (
        <Header
            style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "2px solid rgba(5, 5, 5, 0.06)",
                position: "sticky",
                top: 0,
                zIndex: 1000
            }}
        >
            <img src={logo} alt="logo" />
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={[pathname]}
                selectedKeys={[pathname]}
                items={items}
                style={{ flex: 1, minWidth: 0 }}
            />
            <Button type="text" onClick={handleLogout}>
                Выйти
            </Button>
        </Header>
    );
};

export default MyHeader;
