const responseFormatter = (response) => {
    const videos = response.items.map((item) => {
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
        videos
    };
};

export { responseFormatter };
