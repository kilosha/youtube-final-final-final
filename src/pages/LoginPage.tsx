import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import logo from "../assets/logo.svg";
import { Layout } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

const { Header, Content } = Layout;

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        try {
            await dispatch(login(values)).unwrap();
            navigate("/search");
        } catch (e) {
            alert(e.response.data.message);
        }

        //token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJpZCI6MSwiaWF0IjoxNzYzODUwMTM5fQ.Sp6B1dRVWfegd81IzGfl1GLAgU4hVSVvKJ_6jtGP4Tg";
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo
    ) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Layout
            style={{
                height: "inherit"
            }}
        >
            <Content
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "inherit"
                }}
            >
                <Form
                    name="basic"
                    layout="vertical"
                    labelCol={{ span: 8 }}
                    style={{
                        maxWidth: 600,
                        border: "1px solid rgba(39, 39, 39, 0.1)",
                        borderRadius: "5px",
                        padding: "40px 88px 60px",
                        backgroundColor: "#FFFFFF"
                    }}
                    // initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    requiredMark="optional"
                >
                    <Form.Item label={null}>
                        <img src={logo} alt={"logo"} />
                    </Form.Item>

                    <Form.Item label={null}>Вход</Form.Item>
                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Пароль"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!"
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {/* <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        label={null}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>

        // <div

        // >

        // </div>
    );
};

export default LoginPage;
