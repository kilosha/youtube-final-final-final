import { Outlet } from "react-router";
import { Layout } from "antd";

import MyHeader from "../components/MyHeader";

const { Content } = Layout;

const MainLayout = () => {
    return (
        <Layout
            style={{
                height: "inherit",
                overflowY: "auto"
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
