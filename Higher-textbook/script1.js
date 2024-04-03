// стр 2


//     function changeSize() {
//         document.getElementById('myDiv').style.width = '400px';
//         document.getElementById('myDiv').style.height = '300px';
//     }
//     function showSize() {
//         let width = document.getElementById('myDiv').offsetWidth;
//         let height = document.getElementById('myDiv').offsetHeight;
//         alert('Ширина: ' + width + 'px, Высота: ' + height + 'px');
//     }
    
//     function showFontSize() {
//         let fontSize = window.getComputedStyle(document.getElementById('myDiv')).fontSize;
//         fontSize = parseInt(fontSize);
//         alert('Размер шрифта: ' + fontSize);
//     }
//   Задание 2
//        function increaseSize() {
//             let elem = document.getElementById('elem');
//             let currentWidth = parseInt(elem.style.width);
//             let currentHeight = parseInt(elem.style.height);
            
//             elem.style.width = (currentWidth + 50) + 'px';
//             elem.style.height = (currentHeight + 50) + 'px';
//         }
   
    

    //стр 4
    // 
    // const elem = document.getElementById('elem');
    // const border = elem.style.border;

    // document.getElementById('btn').addEventListener('click', function() {
    // const borderParts = border.split(' ');
    // const borderWidth = borderParts[0];
    // const borderType = borderParts[1];
    // const borderColor = borderParts[2];

    // console.log({borderWidth});
    // console.log({borderType});
    // console.log({borderColor});
    // });
    // 
  
// стр 5
// const elem = document.getElementById('elem');
// const hideBtn = document.getElementById('hideBtn');
// const showBtn = document.getElementById('showBtn');
// hideBtn.addEventListener('click', function() {
//   elem.style.display = 'none';
// });
// showBtn.addEventListener('click', function() {
//   elem.style.display = '';
// });

// const elem = document.getElementById('elem');
// const colorBtn = document.getElementById('colorBtn');
// const resetBtn = document.getElementById('resetBtn');
// let originalColor = elem.style.backgroundColor;
// colorBtn.addEventListener('click', function() {
//   elem.style.backgroundColor = 'blue';
// });
// resetBtn.addEventListener('click', function() {
//   elem.style.backgroundColor = originalColor;
// });

//стр 7
    // const elem = document.getElementById('myDiv');
    //     elem.style.cssText = `
    //     width: 300px;
    //     height: 100px;
    //     margin: 10px auto;
    //     color: red;
    //     `;
        
//стр 8

    //Задание 1

// const elem = document.getElementById('elem');
//   const btn = document.getElementById('btn');
//   btn.addEventListener('click', () => {
//   const computedStyle = getComputedStyle(elem);
//   console.log(Ширина: ${computedStyle.width}, Высота: ${computedStyle.height});
//   });

// Задание 2

// const elem = document.getElementById('elem');
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   const currentWidth = elem.clientWidth;
//   const currentHeight = elem.clientHeight;
//   elem.style.width =   `${currentWidth * 2}px`;
//   elem.style.height = `$ {currentHeight * 2}px`;
// });
    
//стр 9

    // const elem = document.getElementById('elem');
    // const btn = document.getElementById('btn');
    // btn.addEventListener('click', () => {
    //     const computedStyle = window.getComputedStyle(elem);
    //     const fontSize = computedStyle.fontSize;
    //     alert(`Размер шрифта элемента: ${fontSize}`);
    // });
   
//стр 10

//         const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(paragraph => {
//     const number = parseInt(paragraph.textContent);
//     if (number % 2 === 0) {
//         paragraph.classList.add('red');
//     } else {
//         paragraph.classList.add('green');
//     }
// });
   
//стр 11

//         const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(paragraph => {
//     paragraph.addEventListener('click', () => {
//         if (paragraph.style.color === 'red') {
//             paragraph.style.color = 'black';
//         } else {
//             paragraph.style.color = 'red';
//         }
//     });
// }); -->
   
//стр 12

// const inputField = document.getElementById('inputField');
// inputField.addEventListener('blur', function() {
// if (inputField.value.length <= 9) {
// inputField.classList.remove('invalid');
// inputField.classList.add('valid');
// } else {
// inputField.classList.remove('valid');
// inputField.classList.add('invalid');
// }
// });

//стр 13
    //     const inputField = document.getElementById('inputField');
    // inputField.addEventListener('blur', function() {
    //     const inputValue = parseInt(inputField.value);
    //     if (inputValue < 10) {
    //         inputField.dataset.type = 'success';
    //     } else if (inputValue >= 10 && inputValue < 20) {
    //         inputField.dataset.type = 'warning';
    //     } else {
    //         inputField.dataset.type = 'error';
    //     }
    // });
