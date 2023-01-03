// Получение случайного целого числа в заданном интервале, включительно

function getRandomIntInclusive(min, max) {
  if (max <= min) {
    let message = "Неккоректное сравнение";
    return console.log(message);
  }

  if (min < 0 || max < 0) {
    return -1;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function checkLenghth(text, number) {
  return text.length <= number;
}

