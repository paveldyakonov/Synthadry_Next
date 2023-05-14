export type User = {
  id: string;
  name: string;
  profession: string;
  image: string;
  mark: string;
  tasks: string[];
};

const _allUsers: User[] = [
  {
    id: "0",
    name: "Дьяконов Павел",
    profession: "Разработчик",
    image: "/images/users/Dyakonov.webp",
    mark: "40",
    tasks: ["Ведение сайта и заполнение текущих задач"],
  },
  {
    id: "1",
    name: "Березина Елизавета",
    profession: "Художник",
    image: "/images/users/Berezina.jpg",
    mark: "42",
    tasks: ["Моделлирование главного врага"],
  },
  {
    id: "2",
    name: "Миканев Артем",
    profession: "Дизайнер, Разработчик",
    image: "/images/users/MikanevArtem.jpg",
    mark: "157",
    tasks: ["Создание локаций, анимаций, видео к тизеру игры"],
  },
  {
    id: "3",
    name: "Войтович Владислав",
    profession: "Маркетолог",
    image: "/images/users/Voitovich.jpg",
    mark: "29",
    tasks: ["Выкладывание новых видео в YouTube"],
  },
  {
    id: "4",
    name: "Гаврилов Роман",
    profession: "Художник по музыке",
    image: "/images/users/Mikanev.png",
    mark: "37",
    tasks: ["Создание демо-версий музыки для локации 'Лес'"],
  },
  {
    id: "5",
    name: "Жаков Роман",
    profession: "Разработчик",
    image: "/images/users/Mikanev.png",
    mark: "24",
    tasks: ["Создание презентации для финальной аттестации"],
  },
  {
    id: "6",
    name: "Иванов Данила",
    profession: "Разработчик",
    image: "/images/users/Ivanov.jpg",
    mark: "23",
    tasks: [
      "Разработка механики режима 'Тьма'",
      "Спавнер врагов в зависимости от времени в темноте",
    ],
  },
  {
    id: "7",
    name: "Костючек Артем",
    profession: "Разработчик",
    image: "/images/users/Kostuchekk.jpg",
    mark: "21",
    tasks: ["Режим боя, монтирование видео-тизера"],
  },
  {
    id: "8",
    name: "Мушкин Сергей",
    profession: "Гейм-дизайнер",
    image: "/images/users/Mushkin.jpg",
    mark: "47",
    tasks: ["Управление командой"],
  },
  {
    id: "9",
    name: "Осадчий Антон",
    profession: "Руководитель",
    image: "/images/users/Osadchiy.jpg",
    mark: "21",
    tasks: ["Моделлирование нового оружия"],
  },
  {
    id: "10",
    name: "Пирогов Артем",
    profession: "Разработчик",
    image: "/images/users/Pirogov.jpg",
    mark: "14",
    tasks: ["Механики врагов"],
  },
  {
    id: "11",
    name: "Скворцов Матвей",
    profession: "Сценарист",
    image: "/images/users/Scvortsov.jpg",
    mark: "46",
    tasks: ["Написание диалогов к игре", "Написание текста к видео-тизеру"],
  },
  {
    id: "12",
    name: "Никольский Алексей",
    profession: "Разработчик",
    image: "/images/users/Nikolskiy.jpg",
    mark: "35",
    tasks: [
      "Создание и ведение канала в вк",
      "Создание и ведение канала в тг",
      "Написание руководства пользователя",
    ],
  },
  {
    id: "13",
    name: "Кузнецов Михаил",
    profession: "Моделлер",
    image: "/images/users/Kuznetcov.jpg",
    mark: "30",
    tasks: ["Создание модели колодца", "Создание моделей бревен", "Создание модели дома"],
  },
  {
    id: "14",
    name: "Бугров Дмитрий",
    profession: "Моделлер",
    image: "/images/users/Bugrov.jpg",
    mark: "0",
    tasks: [],
  },
  {
    id: "15",
    name: "Богатов Сергей",
    profession: "Разработчик",
    image: "/images/users/Bogatov.jpg",
    mark: "10",
    tasks: ["Создание анимаций взаимодействия с некоторым оружием"],
  },
];

export const getAllUsers = (): User[] => {
  return _allUsers;
};

export const getAllUsersIds = () => {
  return _allUsers.map((user) => {
    return {
      params: {
        personId: user.id,
      },
    };
  });
};

export const getUser = (id: string | string[]): User => {
  let res: User = {
    id: "-1",
    name: "Данного Пользователя не существует",
    profession: "Нет",
    image: "",
    mark: "0",
    tasks: [""],
  };

  for (const user of _allUsers) {
    if (user.id == id) {
      res = JSON.parse(JSON.stringify(user));
    }
  }
  return res;
};
