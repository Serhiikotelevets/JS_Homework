// Мінімум

// 1 Вік :
let out1 = document.querySelector('.out1')
let btn1 = document.querySelector('.btn1')

btn1.onclick =checkAge

function checkAge() {
    const ageInput = document.querySelector('.inp1');
    const age = parseInt(ageInput.value);

    if (isNaN(age)) {
        out1.innerHTML ="Будь ласка, введіть коректний вік.";
        return;
    }

    let category;
    if (age >= 0 && age <= 11) {
        category = "дитина";
    } else if (age >= 12 && age <= 17) {
        category = "підліток";
    } else if (age >= 18 && age <= 59) {
        category = "дорослий";
    } else {
        category = "пенсіонер або ввели некоректний вік";
    }
    out1.innerHTML = `Ви є ${category}.`
}

// 2 Число від 0 до 9 :
let inp2 = document.querySelector('.inp2')
let out2 = document.querySelector('.out2')
let btn2 = document.querySelector('.btn2')

btn2.onclick = () => {
    const specialSymbols = [")","!", "@", "#", "$", "%", "^", "&", "*", "("];

    const userInput = inp2.value

    const userNumber = parseInt(userInput);
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 9) {
        out2.innerHTML = ("Введено некоректне число. Будь ласка, введіть число від 0 до 9.");
    } else {
        const symbol = specialSymbols[userNumber];
        out2.innerHTML = (`Спецсимвол для числа ${userNumber}: ${symbol}`);
    }
}

// 3 Сума всіх чисел в заданому користувачем діапазоні :
let inp31 = document.querySelector('.inp3-1')
let inp32 = document.querySelector('.inp3-2')
let out3 = document.querySelector('.out3')
let btn3 = document.querySelector('.btn3')

btn3.onclick = () => {
        let start = parseInt(inp31.value);
        let end = parseInt(inp32.value);
        let output = out3;

        let sum = 0;

        if (!isNaN(start) && !isNaN(end)) {
            for (let i = start; i <= end; i++) {
                sum += i;
            }
            output.textContent = `Сума всіх чисел у діапазоні від ${start} до ${end} дорівнює ${sum}.`;
        } else {
            output.textContent = "Ви ввели неправильні дані.";
        }
    }

// 4 Два числа і найбільший спільний дільник :
let inp41 = document.querySelector('.inp4-1')
let inp42 = document.querySelector('.inp4-2')
let out4 = document.querySelector('.out4')
let btn4 = document.querySelector('.btn4')

btn4.onclick = () => {
    let num1 = parseInt(inp41.value);
    let num2 = parseInt(inp42.value);
    let output = out4;

    if (!isNaN(num1) && !isNaN(num2)) {
        output.textContent = `Найбільший спільний дільник чисел ${num1} і ${num2} дорівнює ${gcd(num1, num2)}.`;
    } else {
        output.textContent = "Будь ласка, введіть числа.";
    }
}

function gcd(a, b) {
    // Знайти найбільший спільний дільник за алгоритмом Євкліда
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 5 Число і всі дільники цього числа :
let inp5 = document.querySelector('.inp5')
let out5 = document.querySelector('.out5')
let btn5 = document.querySelector('.btn5')

btn5.onclick = () => {
    let number = parseInt(inp5.value);
    let output = out5;

    if (!isNaN(number)) {
        let divisors = findDivisors(number);
        output.textContent = `Дільники числа ${number}: ${divisors.join(", ")}`;
    } else {
        output.textContent = "Будь ласка, введіть число.";
    }
    function findDivisors(num) {
        let divisors = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }
}

// Норма

// 6 Паліндром :
let inp6 = document.querySelector('.inp6')
let out6 = document.querySelector('.out6')
let btn6 = document.querySelector('.btn6')

btn6.onclick = () => {
    let number = inp6.value;
    let output = out6;

    if (number.length === 5) {
        if (isPalindrome(number)) {
            output.textContent = `Число ${number} є паліндромом.`;
        } else {
            output.textContent = `Число ${number} не є паліндромом.`;
        }
    } else {
        output.textContent = "Будь ласка, введіть п’ятирозрядне число.";
    }
}
function isPalindrome(num) {
    return num === num.split('').reverse().join('');
}

// 7 Паліндром :
let inp7 = document.querySelector('.inp7')
let out7 = document.querySelector('.out7')
let btn7 = document.querySelector('.btn7')

btn7.onclick = () => {
    let purchaseAmount = parseFloat(inp7.value);

    let discountRate;

    if (purchaseAmount >= 200 && purchaseAmount < 300) {
        discountRate = 3;
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
        discountRate = 5;
    } else if (purchaseAmount >= 500) {
        discountRate = 7;
    } else {
        discountRate = 0; // Якщо сума покупки менше 200, немає знижки.
    }

    let discount = (purchaseAmount * discountRate) / 100;
    let totalAmount = purchaseAmount - discount;

    out7.innerHTML = ("Сума до оплати зі знижкою: " + totalAmount.toFixed(2));
}
// 8 10 чисел :
let inp8 = document.querySelector('.inp8')
let out8 = document.querySelector('.out8')
let btn8 = document.querySelector('.btn8')

btn8.onclick = () => {
    let numbersString = inp8.value;
    let numbers = numbersString.split(" ").map(Number);

    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let evenCount = 0;
    let oddCount = 0;
    out8.innerHTML = ""
    for (let number of numbers) {
        if (number > 0) {
            positiveCount++;
        } else if (number < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }

        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    out8.innerHTML += `
<li>Додатні числа: ${positiveCount} </li> <br>
<li>Від'ємні числа: ${negativeCount} </li> <br>
<li>Нулі: ${zeroCount} </li> <br>
<li>Парні числа: ${evenCount} </li> <br>
<li>Непарні числа: ${oddCount} </li> <br>
`
}

// 9 День тижня :
let out9 = document.querySelector('.out9')
let btn9 = document.querySelector('.btn9')

btn9.onclick = () => {
    let daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "Пʼятниця", "Субота"];
    let dayIndex = 0;

    while (confirm(daysOfWeek[dayIndex] + ". Хочеш побачити наступний день?")) {
        dayIndex = (dayIndex + 1) % 7;
    }
}

// Максимум

// 10 Гра «Вгадай число» :
let min = 0;
let max = 100;
let guessed = false;
let out10 = document.querySelector('.out10')

function nextGuess() {
    let guess = Math.floor((min + max) / 2);
    document.getElementById('question').textContent = `${guess}`;
}

function higher() {
    min = Math.floor((min + max) / 2) + 1;
    nextGuess();
}

function lower() {
    max = Math.floor((min + max) / 2) - 1;
    nextGuess();
}

function equal() {
    guessed = true;
    out10.innerHTML = (`Ваше число - ${Math.floor((min + max) / 2)}!`);
}

document.getElementById('higher').addEventListener('click', higher);
document.getElementById('lower').addEventListener('click', lower);
document.getElementById('equal').addEventListener('click', equal);

nextGuess();

// 11 Виведи таблицю множення
// Розкоментуй і все запрацює
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// 12 Запитай дату
// Розкоментуй і все запрацює

// function getNextDate(day, month, year) {
//
//     const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//
//     const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//
//     if (day === daysInMonth[month - 1]) {
//         day = 1;
//         if (month === 12) {
//             month = 1;
//             year++;
//         } else {
//             month++;
//         }
//     } else {
//         day++;
//     }
//     return `${day}.${month}.${year}`;
// }
//
// const day = parseInt(prompt('Введіть день:'));
// const month = parseInt(prompt('Введіть місяць:'));
// const year = parseInt(prompt('Введіть рік:'));
// const nextDate = getNextDate(day, month, year);
// alert(`Наступна дата: ${nextDate}`);
