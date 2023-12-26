"use strict"

const historicalEvents = {    
    1639: [
        {
            description: "Основание первого стекольного завода в России. "
        }
    ],

    1641: [
        {
            description: "Успешная оборона донскими казаками крепости Азов в устье Дона ('Азовское сидение')."
        },
        {
            description: "Февраль – март 1917г Февральский переворот и падение монархии"
        },
        {
            description: "26 февраля 1917г Расстрел демонстрации на Знаменской площади Петрограда, переход части воинских частей на сторону восставших"
        },
        {
            description: "1 сентября 1917г Провозглашение России республикой"
        }
    ],

    1933: [
        {
            description: "Признание СССР со стороны США."
        }     
    ],

    1934: [
        {
            description: "Первый съезд писателей."
        },
        {
            description: " XVII съезд партии («Съезд победителей»)."
        },
        {
            description: "Включение СССР в Лигу Наций."
        }
    ],

    1936: [
        {
            description: "Создание конституция СССР."
        }
    ],

    1938: [
        {
            description: " Начало строительства БАМ."
        }
    ]
};

let table = document.querySelector('.events')
let input = document.querySelector('.input')

function printEvents() {
    let input_value = input.value.toLowerCase()

    let rows = document.querySelectorAll('.events__row')
    rows.forEach(row => {
        if (row) {
            row.remove()
        }
    });


    if (input_value.length > 0) {
        if (historicalEvents[input_value]) {
            let count = 1

            for (const events of historicalEvents[input_value]) {
                let tr = document.createElement('tr');
                tr.classList.add('events__row');
            
                let td_2 = document.createElement('td');
                td_2.classList.add('events__cell');
                td_2.textContent = events['description'];
                tr.appendChild(td_2);

                table.appendChild(tr)
            }
        } else {
            alert(`Попробуйте ввести другой год`)
        }

    }

}

input.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        printEvents()
    }
})