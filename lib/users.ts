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
    mark: "35",
    tasks: [
      "Разработка блока с фотографиями в разделе 'Новости'",
      "Ведение сайта и заполнение текущих задач",
    ],
  },
  {
    id: "1",
    name: "Березина Елизавета",
    profession: "Художник",
    image: "/images/users/Berezina.jpg",
    mark: "29",
    tasks: ["Моделлирование врагов"],
  },
  {
    id: "2",
    name: "Миканев Артем",
    profession: "Дизайнер, Разработчик",
    image: "/images/users/MikanevArtem.jpg",
    mark: "123",
    tasks: [
      "Дизайн, UI инвентаря, взаимодействие с UI (кнопки и прочее)",
      "Логика установки фонарика и прицела",
      "Логика увеличения и уменьшения урона, скорострельности, магазина",
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
    mark: "14",
    tasks: ["Создание презентации ко второй аттестации", "Настройки игры"],
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
    mark: "45",
    tasks: [
      "Разработка модели нового оружия",
      "Управление командой",
      "Улучшение модели пистолета (Добавление мелких частей)",
    ],
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
  {
    id: "15",
    name: "Богатов Сергей",
    profession: "Разработчик",
    image: "/images/users/Bogatov.jpg",
    mark: "0",
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
