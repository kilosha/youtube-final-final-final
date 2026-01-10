import { createContext, useContext, useState, type ReactNode } from "react";
import FavoritesModal from "./components/FavoritesModal";
import type { FavoriteItem } from "./constants/Types";

type ModalContextType = {
    openModal: (mode: string, props: FavoriteItem) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);
export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal must be used within ModalProvider");
    }

    return context;
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
