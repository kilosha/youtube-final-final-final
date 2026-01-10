import { useNavigate } from "react-router";

import { List, Popconfirm, Typography } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

import { useModal } from "../ModalProvider";

import { getVideos } from "../redux/slices/videosSlice";
import { deleteFavorite } from "../redux/slices/favoritesSlice";
import useTypedSelector from "../hooks/useTypedSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import type { FavoriteItem } from "../constants/Types";

const { Text } = Typography;

const FavoritesList = () => {
    const { favorites } = useTypedSelector((store) => store.favorites);
    const { openModal } = useModal();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onEdit = (item: FavoriteItem) => {
        openModal("edit", item);
    };

    const onDeletionConfirmed = (item: FavoriteItem) => {
        dispatch(deleteFavorite(item));
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
                            <Popconfirm
                                placement="topLeft"
                                title="Удалить избранное"
                                description={`Вы действительно хотите удалить сохранённый запрос ${item.title}?`}
                                onConfirm={() => onDeletionConfirmed(item)}
                                okText="Да"
                                cancelText="Ой, нет"
                            >
                                <DeleteTwoTone />
                            </Popconfirm>
                        ]}
                    >
                        <Text
                            strong
                            onClick={() => {
                                navigate("/search");
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
