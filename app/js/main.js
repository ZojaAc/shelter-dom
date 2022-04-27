//тут подключаем файлы JS, никаких разделителей в конце строки не ставить!
// @@include('scripts/script.js');

// pop up карточки

const cardOpen = document.querySelector('.card1-js'); // Кнопки для показа окна
const popup = document.querySelector('.popup1-js'); // Само окно
const popbtn = document.querySelector('.popbtn1-js'); // Кнопка для скрытия окна
const popShad = document.querySelector('.popup-shad1-js'); // Фон попап окна

cardOpen.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик 
  e.preventDefault(); // Предотвращаем дефолтное поведение браузера  
  popShad.classList.add('_active'); // Добавляем класс 'active' для фона
  popup.classList.add('_active'); // И для самого окна
  body.classList.add('locked');
});

// Скрытие попап окна при клике на крестик
popbtn.addEventListener('click',() => { // Вешаем обработчик на крестик
  popShad.classList.remove('_active'); // Убираем активный класс с фона
  popup.classList.remove('_active'); // И с окна
  body.classList.remove('locked');
});

// Прячем попап окно на чистом js при клике на фон
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popShad) { // Если цель клика - фон, то:
    popShad.classList.remove('_active'); // Убираем активный класс с фона
    popup.classList.remove('_active'); // И с окна
    body.classList.remove('locked');
  }
});


// 2ая
const card2Open = document.querySelector('.card2-js'); // Кнопки для показа окна
const popup2 = document.querySelector('.popup2-js'); // Само окно
const popbtn2 = document.querySelector('.popbtn2-js'); // Кнопка для скрытия окна
const popShad2 = document.querySelector('.popup-shad2-js'); // Фон попап окна

card2Open.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
  e.preventDefault(); // Предотвращаем дефолтное поведение браузера
  popShad2.classList.add('_active'); // Добавляем класс 'active' для фона
  popup2.classList.add('_active'); // И для самого окна
  body.classList.add('locked');
});

// Скрытие попап окна при клике на крестик
popbtn2.addEventListener('click',() => { // Вешаем обработчик на крестик
  popShad2.classList.remove('_active'); // Убираем активный класс с фона
  popup2.classList.remove('_active'); // И с окна
  body.classList.remove('locked');
});

// Прячем попап окно на чистом js при клике на фон
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popShad2) { // Если цель клика - фон, то:
    popShad2.classList.remove('_active'); // Убираем активный класс с фона
    popup2.classList.remove('_active'); // И с окна
    body.classList.remove('locked');
  }
});


// 3я
const card3Open = document.querySelector('.card3-js'); // Кнопки для показа окна
const popup3 = document.querySelector('.popup3-js'); // Само окно
const popbtn3 = document.querySelector('.popbtn3-js'); // Кнопка для скрытия окна
const popShad3 = document.querySelector('.popup-shad3-js'); // Фон попап окна

card3Open.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
  e.preventDefault(); // Предотвращаем дефолтное поведение браузера
  popShad3.classList.add('_active'); // Добавляем класс 'active' для фона
  popup3.classList.add('_active'); // И для самого окна
  body.classList.add('locked');
});

// Скрытие попап окна при клике на крестик
popbtn3.addEventListener('click',() => { // Вешаем обработчик на крестик
  popShad3.classList.remove('_active'); // Убираем активный класс с фона
  popup3.classList.remove('_active'); // И с окна
  body.classList.remove('locked');
});

// Прячем попап окно на чистом js при клике на фон
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popShad3) { // Если цель клика - фон, то:
    popShad3.classList.remove('_active'); // Убираем активный класс с фона
    popup3.classList.remove('_active'); // И с окна
    body.classList.remove('locked');
  }
});


// 4я
const card4Open = document.querySelector('.card4-js'); // Кнопки для показа окна
const popup4 = document.querySelector('.popup4-js'); // Само окно
const popbtn4 = document.querySelector('.popbtn4-js'); // Кнопка для скрытия окна
const popShad4 = document.querySelector('.popup-shad4-js'); // Фон попап окна

card4Open.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
  e.preventDefault(); // Предотвращаем дефолтное поведение браузера
  popShad4.classList.add('_active'); // Добавляем класс 'active' для фона
  popup4.classList.add('_active'); // И для самого окна
  body.classList.add('locked');
});

// Скрытие попап окна при клике на крестик
popbtn4.addEventListener('click',() => { // Вешаем обработчик на крестик
  popShad4.classList.remove('_active'); // Убираем активный класс с фона
  popup4.classList.remove('_active'); // И с окна
  body.classList.remove('locked');
});

// Прячем попап окно на чистом js при клике на фон
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popShad4) { // Если цель клика - фон, то:
    popShad4.classList.remove('_active'); // Убираем активный класс с фона
    popup4.classList.remove('_active'); // И с окна
    body.classList.remove('locked');
  }
});


// 5я
const card5Open = document.querySelector('.card5-js'); // Кнопки для показа окна
const popup5 = document.querySelector('.popup5-js'); // Само окно
const popbtn5 = document.querySelector('.popbtn5-js'); // Кнопка для скрытия окна
const popShad5 = document.querySelector('.popup-shad5-js'); // Фон попап окна

card5Open.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
  e.preventDefault(); // Предотвращаем дефолтное поведение браузера
  popShad5.classList.add('_active'); // Добавляем класс 'active' для фона
  popup5.classList.add('_active'); // И для самого окна
  body.classList.add('locked');
});

// Скрытие попап окна при клике на крестик
popbtn5.addEventListener('click',() => { // Вешаем обработчик на крестик
  popShad5.classList.remove('_active'); // Убираем активный класс с фона
  popup5.classList.remove('_active'); // И с окна
  body.classList.remove('locked');
});

// Прячем попап окно на чистом js при клике на фон
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popShad5) { // Если цель клика - фон, то:
    popShad5.classList.remove('_active'); // Убираем активный класс с фона
    popup5.classList.remove('_active'); // И с окна
    body.classList.remove('locked');
  }
});


// 6я
const card6Open = document.querySelector('.card6-js'); // Кнопки для показа окна
const popup6 = document.querySelector('.popup6-js'); // Само окно
const popbtn6 = document.querySelector('.popbtn6-js'); // Кнопка для скрытия окна
const popShad6 = document.querySelector('.popup-shad6-js'); // Фон попап окна

card6Open.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
  e.preventDefault(); // Предотвращаем дефолтное поведение браузера
  popShad6.classList.add('_active'); // Добавляем класс 'active' для фона
  popup6.classList.add('_active'); // И для самого окна
  body.classList.add('locked');
});

// Скрытие попап окна при клике на крестик
popbtn6.addEventListener('click',() => { // Вешаем обработчик на крестик
  popShad6.classList.remove('_active'); // Убираем активный класс с фона
  popup6.classList.remove('_active'); // И с окна
  body.classList.remove('locked');
});

// Прячем попап окно на чистом js при клике на фон
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popShad6) { // Если цель клика - фон, то:
    popShad6.classList.remove('_active'); // Убираем активный класс с фона
    popup6.classList.remove('_active'); // И с окна
    body.classList.remove('locked');
  }
});


// 7я
const card7Open = document.querySelector('.card7-js'); // Кнопки для показа окна
const popup7 = document.querySelector('.popup7-js'); // Само окно
const popbtn7 = document.querySelector('.popbtn7-js'); // Кнопка для скрытия окна
const popShad7 = document.querySelector('.popup-shad7-js'); // Фон попап окна

card7Open.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
  e.preventDefault(); // Предотвращаем дефолтное поведение браузера
  popShad7.classList.add('_active'); // Добавляем класс 'active' для фона
  popup7.classList.add('_active'); // И для самого окна
  body.classList.add('locked');
});

// Скрытие попап окна при клике на крестик
popbtn7.addEventListener('click',() => { // Вешаем обработчик на крестик
  popShad7.classList.remove('_active'); // Убираем активный класс с фона
  popup7.classList.remove('_active'); // И с окна
  body.classList.remove('locked');
});

// Прячем попап окно на чистом js при клике на фон
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popShad7) { // Если цель клика - фон, то:
    popShad7.classList.remove('_active'); // Убираем активный класс с фона
    popup7.classList.remove('_active'); // И с окна
    body.classList.remove('locked');
  }
});


// 8я
const card8Open = document.querySelector('.card8-js'); // Кнопки для показа окна
const popup8 = document.querySelector('.popup8-js'); // Само окно
const popbtn8 = document.querySelector('.popbtn8-js'); // Кнопка для скрытия окна
const popShad8 = document.querySelector('.popup-shad8-js'); // Фон попап окна

card8Open.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
  e.preventDefault(); // Предотвращаем дефолтное поведение браузера
  popShad8.classList.add('_active'); // Добавляем класс 'active' для фона
  popup8.classList.add('_active'); // И для самого окна
  body.classList.add('locked');
});

// Скрытие попап окна при клике на крестик
popbtn8.addEventListener('click',() => { // Вешаем обработчик на крестик
  popShad8.classList.remove('_active'); // Убираем активный класс с фона
  popup8.classList.remove('_active'); // И с окна
  body.classList.remove('locked');
});

// Прячем попап окно на чистом js при клике на фон
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popShad8) { // Если цель клика - фон, то:
    popShad8.classList.remove('_active'); // Убираем активный класс с фона
    popup8.classList.remove('_active'); // И с окна
    body.classList.remove('locked');
  }
});

// поп ап карточки один код для всех карточек

// const pets = document.querySelectorAll('.pets__card');

// for (let i = 0; i < pets.length; i++){
//   pets[i].addEventListener('click', ()=>{
//     pets[i].classList.toggle('_active');
//   })
// }

