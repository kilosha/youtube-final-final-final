import { List } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useModal } from "../ModalProvider";

const FavoritesList = () => {
    const { favorites } = useSelector((store) => store.favorites);
    const { openModal } = useModal();

    const onEdit = (item) => {
        openModal("edit", item);
    };

    return (
        <>
            <List
                bordered
                dataSource={favorites}
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            <EditTwoTone onClick={() => onEdit(item)} />,
                            <DeleteTwoTone />
                        ]}
                    >
                        {item.title}
                    </List.Item>
                )}
            />
        </>
    );
};

export default FavoritesList;
