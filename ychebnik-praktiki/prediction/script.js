"use strict"

const predictions = [
    "Стремитесь к успеху и выглядите так, словно вы его уже достигли.",
    "Лучшее всегда является врагом хорошего.",
    "Ничего не может быть смешнее, чем нравиться всем и каждому.",
    "Следите за своим настроением, ведь вокруг вас – люди.",
    "Откажитесь от запланированной поездки.",
    "Примите на себя ответственность, это не станет бременем.",
    "Чтобы выиграть в лотерею, купите лотерейный билет.",
    "Не сдавайтесь и продолжайте прилагать все усилия для получения желаемого.",
    "Делайте все, чего душа пожелает.",
    "Вам сделают заманчивое и весьма неожиданное предложение.",
    "Самое время для движения вперед и повышения настроения. ",
    "Вам не помешает физическая активность.",
    "В делах вам помогут старые друзья – уделите им особое внимание.",
    "Хоть некоторые и пытаются вам помешать, вы все равно достигнете поставленных целей.",
    "Задержка, которая тормозит процесс, будет кратковременной.",
    "Вы получите интересное предложение, которое с большой долей вероятности сулит прибыль.",
    "Давно начатые дела наконец-то придут к завершению в виде выгодной сделки.",
    "Ваш новый партнер – большая удача для вас. Работа с ним выгодна и успешна.",
    "Для успешной реализации планов вам явно нужно развивать дипломатические способности.",
    "Не спешите действовать – начните с размышлений.",
    "Не сдавайтесь и продолжайте прилагать все усилия для получения желаемого."
];

const text = document.querySelector('#text')
const button_start = document.querySelector('#start')
const button_stop = document.querySelector('#stop')
const timer_text = document.querySelector('#timer')

let timerId

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startTimer() {
    timerId = setInterval(function() {
        let randomInt = getRandomInt(1, 21)

        timer_text.textContent = randomInt
    },150)

}

button_start.addEventListener('click', e => {
    button_start.classList.remove('active')
    button_stop.classList.add('active')

    startTimer()

})

button_stop.addEventListener('click', e => {
    clearInterval(timerId)
    button_stop.classList.remove('active')
    
    text.textContent = predictions[timer_text.textContent - 1]
})