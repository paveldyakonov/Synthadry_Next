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
    mark: "7",
    tasks: ["Заполение дорожной карты проекта", "Внесение изменений на сайт"],
    new: false,
  },
  {
    id: "1",
    name: "Березина Елизавета",
    profession: "Художник",
    image: "/images/users/Berezina.jpg",
    mark: "8",
    tasks: ["Дизайн главного меню"],
    new: false,
  },
  {
    id: "2",
    name: "Миканев Артем",
    profession: "Главный Разработчик",
    image: "/images/users/MikanevArtem.jpg",
    mark: "8",
    tasks: ["Скрытие игровых подсказок"],
    new: false,
  },
  {
    id: "3",
    name: "Войтович Владислав",
    profession: "Маркетолог",
    image: "/images/users/Voitovich.jpg",
    mark: "8",
    tasks: ["Создание презентации для ознакомления новых участников команды"],
    new: false,
  },
  {
    id: "4",
    name: "Гаврилов Роман",
    profession: "Художник по музыке",
    image: "/images/users/Mikanev.png",
    mark: "10",
    tasks: ["Создание демо-версий музыки"],
    new: false,
  },
  {
    id: "5",
    name: "Жаков Роман",
    profession: "Разработчик",
    image: "/images/users/Mikanev.png",
    mark: "8",
    tasks: ["Работа над движением персонажа"],
    new: false,
  },
  {
    id: "6",
    name: "Эким Тимур",
    profession: "Разработчик",
    image: "/images/users/Akim.jpg",
    mark: "8",
    tasks: ["Реализация стрельбы"],
    new: false,
  },
  {
    id: "7",
    name: "Рынцева Валерия",
    profession: "Разработчик",
    image: "/images/users/Rintceva.jpg",
    mark: "8",
    tasks: ["Реализация стрельбы"],
    new: false,
  },
  {
    id: "8",
    name: "Мушкин Сергей",
    profession: "Гейм-дизайнер",
    image: "/images/users/Mushkin.jpg",
    mark: "0",
    tasks: [],
    new: false,
  },
  {
    id: "9",
    name: "Осадчий Антон",
    profession: "Руководитель",
    image: "/images/users/Osadchiy.jpg",
    mark: "8",
    tasks: ["Моделлирование монстров"],
    new: false,
  },
  {
    id: "10",
    name: "Котикова Милена",
    profession: "Художник",
    image: "/images/users/Kotikova.jpg",
    mark: "16",
    tasks: ["Написание сценария игры", "Дизайн главного меню"],
    new: false,
  },
  {
    id: "11",
    name: "Космылин Михаил",
    profession: "Разработчик",
    image: "/images/users/Mikanev.png",
    mark: "8",
    tasks: ["Реализация стрельбы"],
    new: false,
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
    mark: "8",
    tasks: ["Оформление страницы itch"],
    new: false,
  },
  {
    id: "14",
    name: "Грачев Максим",
    profession: "Моделлер",
    image: "/images/users/Grachev.jpg",
    mark: "0",
    tasks: [],
    new: false,
  },
  {
    id: "15",
    name: "Ахромов Владислав",
    profession: "Разработчик",
    image: "/images/users/ahromov.jpg",
    mark: "8",
    tasks: ["Создание главного меню"],
    new: true,
  },
  {
    id: "16",
    name: "Толмачев Андрей",
    profession: "Разработчик",
    image: "/images/users/tolmachev.jpg",
    mark: "8",
    tasks: ["Создание главного меню"],
    new: true,
  },
  {
    id: "17",
    name: "Гуканов Даниил",
    profession: "Сценарист",
    image: "/images/users/gukanov.jpg",
    mark: "10",
    tasks: ["Написание сценария игры"],
    new: true,
  },
  {
    id: "18",
    name: "Ермачкова Анастасия",
    profession: "Моделлер",
    image: "/images/users/ermachkova.jpg",
    mark: "8",
    tasks: ["Моделлирование монстров"],
    new: true,
  },
  {
    id: "19",
    name: "Приходько Мираслава",
    profession: "Моделлер",
    image: "/images/users/prihodko.jpg",
    mark: "8",
    tasks: ["Моделлирование монстров"],
    new: true,
  },
  {
    id: "20",
    name: "Катеринич Артем",
    profession: "Разработчик",
    image: "/images/users/Mikanev.png",
    mark: "0",
    tasks: [],
    new: true,
  },
  {
    id: "21",
    name: "Шайдуллин Ильгам",
    profession: "Сценарист",
    image: "/images/users/Mikanev.png",
    mark: "10",
    tasks: ["Написание сценария игры"],
    new: true,
  },
  {
    id: "22",
    name: "Шухратзода Зикрулло",
    profession: "Разработчик",
    image: "/images/users/shuhratzoda.jpg",
    mark: "0",
    tasks: [],
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
