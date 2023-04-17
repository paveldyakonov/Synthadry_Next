export enum KindNews {
  video = "video",
  images = "images",
}

export type News = {
  title: string;
  url?: string;
  kind: KindNews;
  paths?: string[];
};

const _allVideos: News[] = [
  {
    title: "Начало разработки",
    url: "https://www.youtube.com/watch?v=as1X5jzsmXk",
    kind: KindNews.video,
  },
  {
    title: "Перевод игры на ПК, обновление графики",
    url: "https://www.youtube.com/watch?v=9m-QfsTGYZE",
    kind: KindNews.video,
  },
  {
    title: "У нас появились новые враги!",
    paths: ["/images/enemies/enemy1.jpg", "/images/enemies/enemy2.jpg"],
    kind: KindNews.images,
  },
  {
    title: "Наше огнестрельное оружие",
    paths: ["/images/news/pistol.jpg", "/images/news/shotgun1.jpg", "/images/news/shotgun2.png"],
    kind: KindNews.images,
  },
];

export const getAllNews = (): News[] => {
  return _allVideos;
};
