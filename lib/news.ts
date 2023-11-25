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
    paths: [
      "/images/enemies/enemy3.png",
      "/images/enemies/enemy2.jpg",
      "/images/enemies/boss1.png",
    ],
    kind: KindNews.images,
  },
  {
    title: "Наше новое оружие!",
    url: "https://www.youtube.com/watch?v=jK7qM0aRs9g",
    kind: KindNews.video,
  },
  {
    title: '"Ночь, улица, факел, чекпойнты"',
    url: "https://www.youtube.com/watch?v=-32qPIWrSzA",
    kind: KindNews.video,
  },
  {
    title: "Окружение на локациях",
    paths: [
      "/images/news/environment/houses_in_forest.jpg",
      "/images/news/environment/houses_in_forest(1).jpg",
      "/images/news/environment/table_chest.jpg",
      "/images/news/environment/brevna.jpg",
      "/images/news/environment/colodec.jpg",
      "/images/news/environment/polena.jpg",
    ],
    kind: KindNews.images,
  },
  {
    title: "Прототип нового инвентаря",
    url: "https://www.youtube.com/watch?v=rvXWQ0e0O3A",
    kind: KindNews.video,
  },
  {
    title: "Упс... Немного спойлеров",
    paths: ["/images/news/spoilers/lastDance.jpg", "/images/news/spoilers/final.jpg"],
    kind: KindNews.images,
  },
];

export const getAllNews = (): News[] => {
  return _allVideos;
};
