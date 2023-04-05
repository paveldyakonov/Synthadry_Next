export type Video = {
    title: string;
    url: string;
}

const _allVideos: Video[] = [
    {
        title: 'Начало разработки',
        url: 'https://www.youtube.com/watch?v=as1X5jzsmXk',
    },
    {
        title: 'Перевод игры на ПК, обновление графики',
        url: 'https://www.youtube.com/watch?v=9m-QfsTGYZE',
    },
];

export const getAllVideos = (): Video[] => {
    return _allVideos;
};