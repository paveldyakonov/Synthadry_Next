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
    mark: "13",
    tasks: ["Создание сайта", "Анимация действий с оружием"],
  },
  {
    id: "1",
    name: "Березина Елизавета",
    profession: "Художник",
    image: "/images/users/Berezina.jpg",
    mark: "19",
    tasks: ["Моделлирование врагов"],
  },
  {
    id: "2",
    name: "Миканев Артем",
    profession: "Дизайнер, Разработчик",
    image: "/images/users/MikanevArtem.jpg",
    mark: "95",
    tasks: [
      "Создание контроллера света для автомобилей, вход и выход из машины",
      "Обновленная система здоровья и брони",
      "Вывод инвентаря в колесо, UI колеса, характеристики при наведении",
      "Различные фиксы травы и прочее",
      "Работа с факелом, остаток топлива и прочее",
      "Разработка подсказок",
      "Разработка нового рабочего инвентаря",
      "Обводка объектов и их отображение",
    ],
  },
  {
    id: "3",
    name: "Войтович Владислав",
    profession: "Маркетолог",
    image: "/images/users/Voitovich.jpg",
    mark: "5",
    tasks: ["Выкладывание новых видео в YouTube"],
  },
  {
    id: "4",
    name: "Гаврилов Роман",
    profession: "Художник по музыке",
    image: "/images/users/Mikanev.png",
    mark: "7",
    tasks: ["Поиск стандартных звуков"],
  },
  {
    id: "5",
    name: "Жаков Роман",
    profession: "Разработчик",
    image: "/images/users/Mikanev.png",
    mark: "7",
    tasks: ["Создание презентаций", "Настройки игры"],
  },
  {
    id: "6",
    name: "Иванов Данила",
    profession: "Разработчик",
    image: "/images/users/Ivanov.jpg",
    mark: "14",
    tasks: ["Разработка механики режима 'Тьма'"],
  },
  {
    id: "7",
    name: "Костючек Артем",
    profession: "Разработчик",
    image: "/images/users/Kostuchekk.jpg",
    mark: "12",
    tasks: ["Режим боя"],
  },
  {
    id: "8",
    name: "Мушкин Сергей",
    profession: "Гейм-дизайнер",
    image: "/images/users/Mushkin.jpg",
    mark: "26",
    tasks: ["Моделька факела"],
  },
  {
    id: "9",
    name: "Осадчий Антон",
    profession: "Руководитель",
    image: "/images/users/Osadchiy.jpg",
    mark: "14",
    tasks: ["Моделлирование мелких частей"],
  },
  {
    id: "10",
    name: "Пирогов Артем",
    profession: "Разработчик",
    image: "/images/users/Pirogov.jpg",
    mark: "7",
    tasks: ["Механики врагов"],
  },
  {
    id: "11",
    name: "Скворцов Матвей",
    profession: "Сценарист",
    image: "/images/users/Scvortsov.jpg",
    mark: "22",
    tasks: ["Написание сценария для локации 'Тёмный лес'"],
  },
  {
    id: "12",
    name: "Никольский Алексей",
    profession: "Разработчик",
    image: "/images/users/Nikolskiy.jpg",
    mark: "7",
    tasks: ["Разработка механики управления машиной", "Улучшение камеры"],
  },
  {
    id: "13",
    name: "Кузнецов Михаил",
    profession: "Моделлер",
    image: "/images/users/Kuznetcov.jpg",
    mark: "0",
    tasks: [],
  },
  {
    id: "14",
    name: "Бугров Дмитрий",
    profession: "Моделлер",
    image: "/images/users/Bugrov.jpg",
    mark: "0",
    tasks: [],
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
