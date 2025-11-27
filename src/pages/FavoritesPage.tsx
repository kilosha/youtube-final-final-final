import { Typography } from "antd";
import React from "react";
import FavoritesList from "../components/FavoritesList";

const FavoritesPage = () => {
    return (
        <div>
            <Typography.Title
                level={2}
                style={{ marginTop: "40px", marginBottom: "40px" }}
            >
                Избранное
            </Typography.Title>
            <FavoritesList />
        </div>
    );
};

export default FavoritesPage;
