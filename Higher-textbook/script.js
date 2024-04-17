// Задание 24.1-24.3

// let w1 = document.documentElement.clientWidth;
// let w2 = window.innerWidth;
// let h1 = document.documentElement.clientHeight;
// let h2 = window.innerHeight;

// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   console.log(w1, h1); // Размеры окна без учета прокрутки
//   console.log(w2, h2); // Размеры окна с учетом прокрутки
//   console.log(w2 - w1); // Размер полосы прокрутки по ширине
//   console.log(h2 - h1); // Размер полосы прокрутки по высоте
// });

// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   if (document.documentElement.clientHeight < window.innerHeight) {
//     console.log('Вертикальная прокрутка присутствует');
//   } else {
//     console.log('Вертикальная прокрутка отсутствует');
//   }
// });

// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   if (document.documentElement.clientWidth < window.innerWidth) {
//     console.log('Горизонтальная прокрутка присутствует');
//   } else {
//     console.log('Горизонтальная прокрутка отсутствует');
//   }
// });

// Задание 25.1-25.3

//     let scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//    );
   
//    let button = document.getElementById('yourButtonId');
   
//    button.addEventListener('click', function() {
//      console.log(scrollHeight);
//    });

// document.getElementById('scrollWidthBtn').addEventListener('click', function() {
//     let scrollWidth = Math.max(
//         document.body.scrollWidth, document.documentElement.scrollWidth,
//         document.body.offsetWidth, document.documentElement.offsetWidth,
//         document.body.clientWidth, document.documentElement.clientWidth
//     );
//     alert('Ширина с учетом прокрученной части: ' + scrollWidth);
// });

// document.getElementById('hiddenHeightBtn').addEventListener('click', function() {
//     let hiddenHeight = document.body.scrollHeight - window.innerHe ght;
//     alert('Высота спрятанной под прокруткой частью: ' + hiddenHeight);
// });

// Задание 26.1-26.2
// document.getElementById('scrollPositionBtn').addEventListener('click', function() {
//     let scrollY = window.pageYOffset;
//     alert('Прокручено окно по вертикали: ' + scrollY);
// });

// document.getElementById('scrollRemainingBtn').addEventListener('click', function() {
//     let scrollRemaining = document.body.scrollHeight - window.innerHeight - window.pageYOffset;
//     alert('Осталось до конца прокрутки по вертикали: ' + scrollRemaining);
// });

// Задание 27.1-27.4
// document.getElementById('scrollToTopBtn').addEventListener('click', function() {
//     document.documentElement.scrollTop = 0;
// });

document.getElementById('scrollToBottomBtn').addEventListener('click', function() {
    document.documentElement.scrollTop = window.innerHeight;
});

// document.getElementById('scrollToPositionTopBtn').addEventListener('click', function() {
//     document.documentElement.scrollTop = 300;
// });

// document.getElementById('scrollToPositionBottomBtn').addEventListener('click', function() {
//     document.documentElement.scrollTop = window.innerHeight - 100;
// });

// Задание 28.1-28.3
// document.getElementById('scrollToPositionTopBtn').addEventListener('click', function() {
//     window.scrollTo({
//         top: 300,
//         behavior: 'smooth'
//     });
// });

// document.getElementById('scrollToTopSmoothBtn').addEventListener('click', function() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// document.getElementById('scrollToBottomSmoothBtn').addEventListener('click', function() {
//     window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth'
//     });
// });

// Задание 29.1-29.4
// document.getElementById('scrollDownBtn').addEventListener('click', function() {
//     window.scrollBy(0, 100);
// });

// document.getElementById('scrollUpBtn').addEventListener('click', function() {
//     window.scrollBy(0, -100);
// });

// document.getElementById('scrollDownSmoothBtn').addEventListener('click', function() {
//     window.scrollBy({
//         top: 300,
//         behavior: 'smooth'
//     });
// });

// document.getElementById('scrollUpSmoothBtn').addEventListener('click', function() {
//     window.scrollBy({
//         top: -300,
//         behavior: 'smooth'
//     });
// });

// Задание 31.1
// window.addEventListener('scroll', function() {
//     console.log(window.pageYOffset); // Выводим текущую прокрутку от верха сайта
  
//     // Проверяем, достиг ли пользователь конца страницы
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//       console.log('Вы достигли конца страницы!');
//     }
//   });