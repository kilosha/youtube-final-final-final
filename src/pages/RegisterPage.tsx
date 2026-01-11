import { Link, useNavigate } from "react-router";
import { Button, Layout, message, Form, Input, Radio, DatePicker } from "antd";
import type { FormProps } from "antd";

import { login, register } from "../redux/slices/authSlice";
import useTypedSelector from "../hooks/useTypedSelector";
import useAppDispatch from "../hooks/useAppDispatch";

import logo from "../assets/logo.svg";
import dayjs from "dayjs";

const { Content } = Layout;

type Gender = "male" | "female";

type FieldType = {
    username: string;
    email: string;
    password: string;
    gender: Gender;
    age: number;
};

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isLoading } = useTypedSelector((state) => state.auth);
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        try {
            values.age = dayjs().diff(dayjs(values.age), "year");

            await dispatch(register(values)).unwrap();
            await dispatch(
                login({ email: values.email, password: values.password })
            ).unwrap();
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
                            width: 500,
                            border: "1px solid rgba(39, 39, 39, 0.1)",
                            borderRadius: "5px",
                            padding: "40px 88px 60px",
                            backgroundColor: "#FFFFFF"
                        }}
                        initialValues={{ gender: "male" }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item label={null}>
                            <img src={logo} alt={"logo"} />
                        </Form.Item>

                        <Form.Item label={null}>Регистрация</Form.Item>
                        <Form.Item<FieldType>
                            label="Имя пользователя"
                            name="username"
                            labelCol={{ span: 12 }}
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Пожалуйста, введите имя пользователя",
                                    validateTrigger: "onSubmit"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
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

                        <Form.Item<FieldType>
                            required
                            label="Пол"
                            name="gender"
                        >
                            <Radio.Group
                                options={[
                                    { value: "male", label: "Мужской" },
                                    { value: "female", label: "Женский" }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item<FieldType>
                            labelCol={{ span: 12 }}
                            required
                            label="Дата рождения"
                            name="age"
                            tooltip="Вам должно быть 18 лет, чтобы зарегистрироваться"
                        >
                            <DatePicker
                                maxDate={dayjs(
                                    dayjs().subtract(18, "year"),
                                    "YYYY-MM-DD"
                                )}
                            />
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
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Form.Item label={null}>
                            Уже есть аккаунт? <Link to={"/login"}>Войти</Link>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </>
    );
};

export default RegisterPage;
