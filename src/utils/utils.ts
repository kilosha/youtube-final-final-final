import axios from "axios";

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

const getErrorMessage = (error: unknown) => {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
        return error.response.data.message;
    }
    return "Что-то пошло не так. Повторите попытку позже.";
};

export { responseFormatter, getErrorMessage };
