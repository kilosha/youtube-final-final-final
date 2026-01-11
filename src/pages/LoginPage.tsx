import { Link, useNavigate } from "react-router";
import { Layout, Button, message, Form, Input } from "antd";
import type { FormProps } from "antd";

import { login } from "../redux/slices/authSlice";
import useTypedSelector from "../hooks/useTypedSelector";
import useAppDispatch from "../hooks/useAppDispatch";

import logo from "../assets/logo.svg";

const { Content } = Layout;

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isLoading } = useTypedSelector((state) => state.auth);
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        try {
            await dispatch(login(values)).unwrap();
            navigate("/search");
        } catch (error) {
            messageApi.error(error.message);
        }
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo
    ) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            {contextHolder}
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
                                    pattern: new RegExp(
                                        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                                    ),
                                    message: "Введите валидный email",
                                    validateTrigger: "onBlur"
                                },
                                {
                                    required: true,
                                    message: "Пожалуйста, введите email",
                                    validateTrigger: "onSubmit"
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
                                    message: "Пожалуйста, введите пароль"
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
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={isLoading}
                            >
                                Войти
                            </Button>
                        </Form.Item>
                        <Form.Item label={null}>
                            или <Link to={"/register"}>Зарегистрироваться</Link>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </>
    );
};

export default LoginPage;
