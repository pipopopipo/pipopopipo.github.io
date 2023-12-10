/*
  Вы ведёте блог о путешествиях. На главной странице сайта
  - лента последних записей с фото и вступительным текстом.

  Порой этот текст слишком большой. В таком случае в конце
  помещают «...»

  Задача:

  Если текст длиннее 100 символов, обрежьте его и справа добавьте троеточие.
  Выведите текст в консоль

  1. Используйте метод .substr() для обрезки текста
  2. Используйте + для добавления нового текста
  3. Используйте console.log для вывода текста (см. 1 задание)

  Проверьте работу на текстах разной длины

  Примеры:
  https://codepen.io/neizerth/pen/vYbGwYq?editors=0012
  https://codepen.io/neizerth/pen/poGymJw?editors=0011

*/

const text = 'Путешествия - это увлекательное и незабываемое приключение, которое может преобразить вашу' +
    ' жизнь. Они предоставляют уникальную возможность познать разнообразные культуры, исследовать невиданные места' +
    ' и расширить горизонты. Путешествия позволяют нам не только узнать мир, но и самих себя. В этой статье мы' +
    ' рассмотрим, почему путешествия так важны и как они могут изменить вашу жизнь.';

// Проверяем длину текста
if (text.length > 100) {
    // Если больше 100 символов, то обрезаем и добавляем троеточие
    console.log(text.substr(0, 100) + '...');
}
// Если меньше 100 символов, то выводим как есть
else {
    console.log(text);
}