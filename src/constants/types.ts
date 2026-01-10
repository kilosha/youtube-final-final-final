export type VideoItem = {
    id: string;
    image: string;
    title: string;
    description: string;
};

export type FavoriteItem = {
    id: string;
    query: string;
    title: string;
    sortBy: string;
    maxResults: number;
};
