// Максимум

// 1 Депозит:
let inp1 = document.querySelector('.inp1')
let out1 = document.querySelector('.out1')
let btn1 = document.querySelector('.btn1')


btn1.onclick = () => {
    let a = (5 / 12) / 100
    let b = parseInt(inp1.value)
    let c = 2
    let x = b * a
    out1.innerHTML = Math.floor(x)
}

// 2 Що повернуть вирази:
// console.log(2 && 0 && 3) // виведе 0
// console.log( 2 || 0 || 3) // виведе 2
// console.log(2 && 0 || 3) // виведе 3


// Норма

// 1 Скільки шоколадок:
let inp21 = document.querySelector('.inp2-1')
let inp22 = document.querySelector('.inp2-2')
let out21 = document.querySelector('.out2-1')
let out22 = document.querySelector('.out2-2')
let btn2 = document.querySelector('.btn2')


btn2.onclick = () => {
    let a = parseInt(inp21.value)
    let b = parseInt(inp22.value)
    let c = a / b
    let x = a % b
    out21.innerHTML = Math.floor(c)
    out22.innerHTML = Math.floor(x)
}

// 2 Тризначне число:
let out3 = document.querySelector('.out3')
let btn3 = document.querySelector('.btn3')


btn3.onclick = () => {
    let number = document.querySelector('.inp3').value

    if (number.length === 3) {
        let reversedNumber = "";
        let digit1 = number % 10;
        number = Math.floor(number / 10);

        let digit2 = number % 10;
        number = Math.floor(number / 10);

        let digit3 = number;

        reversedNumber = digit1 * 100 + digit2 * 10 + digit3;
        out3.innerHTML = ("Задом наперед: " + reversedNumber);
        } else {
            out3.innerHTML =  ("Будь ласка, введіть тризначне число.");
        }
}

// Мінімум

// 1 Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let a = 0.1
let b = 0.2
let c = a + b
console.log(c)

// 2 Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let a2 = "1"
let b2 = 2
let c2 = +a2 + +b2
console.log(c2)

// 3 Користувач вказує обсяг флешки в Гб....
let inp4 = document.querySelector('.inp4')
let out41 = document.querySelector('.out4-1')
let out42 = document.querySelector('.out4-2')
let btn4 = document.querySelector('.btn4')


btn4.onclick = () => {
    let a = parseInt(inp4.value)
    let b = 1000
    let c = a * b
    let y = c / 820
    let x = c % 820
    out41.innerHTML = Math.floor(y)
    out42.innerHTML = Math.floor(x)
}