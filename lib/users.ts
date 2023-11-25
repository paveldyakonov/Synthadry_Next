export type User = {
  id: string;
  name: string;
  profession: string;
  image: string;
  mark: string;
  tasks: string[];
  new: boolean;
};

const _allUsers: User[] = [
  {
    id: "0",
    name: "Дьяконов Павел",
    profession: "Разработчик",
    image: "/images/users/Dyakonov.webp",
    mark: "15",
    tasks: ["Модификации сайта", "Ведение дорожной карты проекта"],
    new: false,
  },
  {
    id: "1",
    name: "Березина Елизавета",
    profession: "Художник",
    image: "/images/users/Berezina.jpg",
    mark: "41",
    tasks: ["Глобальная переработка интерфейса"],
    new: false,
  },
  {
    id: "2",
    name: "Миканев Артем",
    profession: "Главный Разработчик",
    image: "/images/users/MikanevArtem.jpg",
    mark: "45",
    tasks: ["Еженедельная выдача заданий всей команде"],
    new: false,
  },
  {
    id: "3",
    name: "Войтович Владислав",
    profession: "Маркетолог",
    image: "/images/users/Voitovich.jpg",
    mark: "20",
    tasks: ["Выкладывание новых видео в YouTube"],
    new: false,
  },
  {
    id: "4",
    name: "Гаврилов Роман",
    profession: "Художник по музыке",
    image: "/images/users/Mikanev.png",
    mark: "31",
    tasks: ["Создание демо-версий музыки для локаций"],
    new: false,
  },
  {
    id: "5",
    name: "Жаков Роман",
    profession: "Разработчик",
    image: "/images/users/Mikanev.png",
    mark: "22",
    tasks: ["Создание презентации для первой аттестации"],
    new: false,
  },
  {
    id: "6",
    name: "Эким Тимур",
    profession: "Разработчик",
    image: "/images/users/Akim.jpg",
    mark: "33",
    tasks: ["Разработка различных механик игры"],
    new: true,
  },
  {
    id: "7",
    name: "Рынцева Валерия",
    profession: "Разработчик",
    image: "/images/users/Rintceva.jpg",
    mark: "32",
    tasks: ["Разработка различных механик игры"],
    new: true,
  },
  {
    id: "8",
    name: "Мушкин Сергей",
    profession: "Гейм-дизайнер",
    image: "/images/users/Mushkin.jpg",
    mark: "19",
    tasks: ["Разработка идей"],
    new: false,
  },
  {
    id: "9",
    name: "Осадчий Антон",
    profession: "Руководитель",
    image: "/images/users/Osadchiy.jpg",
    mark: "48",
    tasks: ["Моделлирование церкви"],
    new: false,
  },
  {
    id: "10",
    name: "Котикова Милена",
    profession: "Художник",
    image: "/images/users/Kotikova.jpg",
    mark: "46",
    tasks: ["Глобальная переработка интерфейса"],
    new: true,
  },
  {
    id: "11",
    name: "Космылин Михаил",
    profession: "Разработчик",
    image: "/images/users/Mikanev.png",
    mark: "33",
    tasks: ["Разработка различных механик игры"],
    new: true,
  },
  {
    id: "12",
    name: "Кузнецов Михаил",
    profession: "Моделлер",
    image: "/images/users/Kuznetcov.jpg",
    mark: "0",
    tasks: [],
    new: false,
  },
  {
    id: "13",
    name: "Бахонский Дмитрий",
    profession: "Художник",
    image: "/images/users/Bahonskiy.jpg",
    mark: "10",
    tasks: ["Глобальная переработка интерфейса"],
    new: true,
  },
  {
    id: "14",
    name: "Грачев Максим",
    profession: "Моделлер",
    image: "/images/users/Grachev.jpg",
    mark: "24",
    tasks: ["Моделлирование оружия"],
    new: true,
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
    new: false,
  };

  for (const user of _allUsers) {
    if (user.id == id) {
      res = JSON.parse(JSON.stringify(user));
    }
  }
  return res;
};
