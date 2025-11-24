const responseFormatter = (response) => {
    const items = response.items.map((item) => {
        const { title, description, thumbnails } = item.snippet;

        return {
            id: item.id.videoId,
            title,
            description,
            image: thumbnails.medium.url
        };
    });

    return {
        totalResults: response.pageInfo.totalResults,
        items
    };
};

export { responseFormatter };
