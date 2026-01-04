import { List, Typography } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../ModalProvider";
import { useNavigate } from "react-router";
import { getVideos } from "../redux/slices/videosSlice";

const { Text } = Typography;

const FavoritesList = () => {
    const { favorites } = useSelector((store) => store.favorites);
    const { openModal } = useModal();
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                        <Text
                            strong
                            onClick={() => {
                                navigate("search");
                                dispatch(getVideos(item));
                            }}
                        >
                            {item.title}
                        </Text>
                    </List.Item>
                )}
            />
        </>
    );
};

export default FavoritesList;
