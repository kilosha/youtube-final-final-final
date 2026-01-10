import React, { useEffect, useState } from "react";
import { Button, Slider, Select, Form, Input, Modal, Radio } from "antd";
import { Col, InputNumber, Row, Space } from "antd";
import { addFavorite, editFavorite } from "../redux/slices/favoritesSlice";
import useAppDispatch from "../hooks/useAppDispatch";

interface Values {
    title?: string;
    description?: string;
    modifier?: string;
}

const FavoritesModal = ({ mode, isModalOpen, close, data }) => {
    const dispatch = useAppDispatch();
    // const { modalData } = useSelector((state) => state.modal);
    const [form] = Form.useForm();
    //const [formValues, setFormValues] = useState<Values>(data);

    const onCreate = (values: Values) => {
        if (mode === "add") {
            dispatch(addFavorite(values));
        } else {
            dispatch(editFavorite({ ...values, id: data.id }));
        }

        close();
    };

    useEffect(() => {
        if (isModalOpen) {
            form.setFieldsValue(data);
        }
    }, [isModalOpen, data, form]);

    return (
        <>
            <Modal
                open={isModalOpen}
                title="Сохранить запрос"
                okText="Сохранить"
                cancelText="Не сохранять"
                okButtonProps={{ autoFocus: true, htmlType: "submit" }}
                onCancel={() => close()}
                destroyOnHidden
                modalRender={(dom) => (
                    <Form
                        layout="vertical"
                        form={form}
                        name="form_in_modal"
                        //initialValues={formValues}
                        clearOnDestroy
                        onFinish={(values) => onCreate(values)}
                    >
                        {dom}
                    </Form>
                )}
            >
                <Form.Item name="query" label="Запрос">
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    name="title"
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

                <Form.Item name="sortBy" label="Сортировать по">
                    <Select
                        options={[
                            { label: "date", value: "date" },
                            { label: "rating", value: "rating" },
                            { label: "relevance", value: "relevance" },
                            { label: "title", value: "title" },
                            { label: "viewCount", value: "viewCount" }
                        ]}
                    />
                </Form.Item>

                <Row>
                    <Col span={12}>
                        <Form.Item
                            name="maxResults"
                            label="Максимальное количество"
                        >
                            <Slider
                                min={1}
                                max={50}
                                // onChange={onChange}
                                // value={
                                //     typeof inputValue === "number"
                                //         ? inputValue
                                //         : 0
                                // }
                                step={1}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item name="maxResults" label="">
                            <InputNumber
                                min={1}
                                max={50}
                                step={1}
                                //value={inputValue}
                                //onChange={onChange}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default FavoritesModal;
