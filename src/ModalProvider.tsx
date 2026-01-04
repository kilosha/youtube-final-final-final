import { createContext, useContext, useState, type ReactNode } from "react";
import FavoritesModal from "./components/FavoritesModal";

const ModalContext = createContext(null);
export const useModal = () => useContext(ModalContext);

type FavoriteItem = {
    id: string;
    query: string;
    title: string;
    sortBy: string;
    maxResults: number;
};

type PropsType = {
    children: ReactNode;
};

export const ModalProvider = ({ children }: PropsType) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState("add");
    const [modalProps, setModalProps] = useState({});

    const openModal = (mode: string, props: FavoriteItem) => {
        setMode(mode);
        setModalProps({
            id: props.id || "",
            query: props.query,
            title: props.title || props.query,
            sortBy: props.sortBy || "relevance",
            maxResults: props.maxResults || 12
        });

        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalProps({});
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}

            <FavoritesModal
                mode={mode}
                isModalOpen={isModalOpen}
                data={modalProps}
                close={closeModal}
            />
        </ModalContext.Provider>
    );
};
