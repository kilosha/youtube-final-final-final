import React, { useState } from "react";
import { Button, Slider, Select, Form, Input, Modal, Radio } from "antd";
import { Col, InputNumber, Row, Space } from "antd";

interface Values {
    title?: string;
    description?: string;
    modifier?: string;
}

const FavoritesModal = ({ isModalOpen, setIsModalOpen }) => {
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState<Values>();
    const [open, setOpen] = useState(false);

    const onCreate = (values: Values) => {
        console.log("Received values of form: ", values);
        setFormValues(values);
        setOpen(false);
    };
    return (
        <>
            <Modal
                open={isModalOpen}
                title="Сохранить запрос"
                okText="Сохранить"
                cancelText="Не сохранять"
                okButtonProps={{ autoFocus: true, htmlType: "submit" }}
                onCancel={() => setIsModalOpen(false)}
                destroyOnHidden
                modalRender={(dom) => (
                    <Form
                        layout="vertical"
                        form={form}
                        name="form_in_modal"
                        initialValues={{ modifier: "public" }}
                        clearOnDestroy
                        onFinish={(values) => onCreate(values)}
                    >
                        {dom}
                    </Form>
                )}
            >
                <Form.Item name="title" label="Запрос">
                    <Input />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Название"
                    rules={[
                        {
                            required: true,
                            message: "Please input the title of collection!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="select" label="Сортировать по">
                    <Select options={[{ label: "Demo", value: "demo" }]} />
                </Form.Item>

                <Form.Item name="slider" label="Максимальное количество">
                    <Row>
                        <Col span={12}>
                            <Slider
                                min={0}
                                max={1}
                                // onChange={onChange}
                                // value={
                                //     typeof inputValue === "number"
                                //         ? inputValue
                                //         : 0
                                // }
                                step={0.01}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={0}
                                max={1}
                                style={{ margin: "0 16px" }}
                                step={0.01}
                                //value={inputValue}
                                //onChange={onChange}
                            />
                        </Col>
                    </Row>
                </Form.Item>
            </Modal>
        </>
    );
};

export default FavoritesModal;
