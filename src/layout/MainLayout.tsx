import { Layout } from "antd";

const { Content } = Layout;
import { Outlet } from "react-router";
import MyHeader from "../components/MyHeader";

const MainLayout = () => {
    return (
        <Layout
            style={{
                height: "inherit"
            }}
        >
            <MyHeader />
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
