import { getRandomIntInclusive } from './util.js';

// Генерация массива

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Игорь',
  'Артемий',
  'Петр',
  'Светлана',
  'Ксения',
  'Никита',
];

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

const createComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomIntInclusive(1, 6); i++) {
    comments.push({
      id: getRandomIntInclusive(1, 999),
      avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAME),
    })
  }

  return comments;
};


const createDescription = () => {
  const description = [];

  for (let i = 1; i <= 25; i++) {
    description.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: "Фото из котоблога",
      likes: getRandomIntInclusive(15, 200),
      comments: createComments(),
    })
  }

  return description;
};


console.log(createDescription());
