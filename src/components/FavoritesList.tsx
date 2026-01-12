import { useNavigate } from "react-router";

import { Empty, List, Popconfirm, Typography } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

import { useModal } from "../ModalProvider";

import { getVideos } from "../redux/slices/videosSlice";
import { deleteFavorite } from "../redux/slices/favoritesSlice";
import useTypedSelector from "../hooks/useTypedSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import type { FavoriteItem } from "../constants/types";

const { Text } = Typography;

const FavoritesList = () => {
    const { userId } = useTypedSelector((store) => store.auth);
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
                locale={{
                    emptyText: (
                        <Empty description={"Вы ещё ничего не сохранили <3"} />
                    )
                }}
                bordered
                dataSource={favorites.filter((item) => item.userId === userId)}
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
                            style={{ cursor: "pointer" }}
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
