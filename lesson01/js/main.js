// Максимум

// 1 Запитай у користувача радіус кола
let inp1 = document.querySelector('.inp1')
let out1 = document.querySelector('.out1')
let btn1 = document.querySelector('.btn1')

btn1.onclick = () => {
    let inp1V = parseFloat(inp1.value)
    console.log(inp1V)
    let res = inp1V **2 * 3.14
    out1.innerHTML = res
}

// 2 Запитай у користувача відстань ...
let inp2 = document.querySelector('.inp2')
let inp22 = document.querySelector('.inp2_2')
let out2 = document.querySelector('.out2')
let btn2 = document.querySelector('.btn2')

btn2.onclick = () => {
    let inp2V = parseFloat(inp2.value)
    let inp22V = parseFloat(inp22.value)
    let res = inp2V / inp22V
    out2.innerHTML = res + " " + "km/h"
}

// 3 Конвертор валют ...
let inp3 = document.querySelector('.inp3')
let out3 = document.querySelector('.out3')
let btn3 = document.querySelector('.btn3')

btn3.onclick = () => {
    let inp3V = parseFloat(inp3.value)
   const a = 0.91 // курс USD to EUR
    let res = inp3V * a
    out3.innerHTML = res
}

// Норма

// 1 Запитай ім’я
let inp4 = document.querySelector('.inp4')
let out4 = document.querySelector('.out4')
let btn4 = document.querySelector('.btn4')

btn4.onclick = () => {
    out4.innerHTML = inp4.value
}
// 2 Запитай рік народження
let inp5 = document.querySelector('.inp5')
let out5 = document.querySelector('.out5')
let btn5 = document.querySelector('.btn5')

btn5.onclick = () => {
    const b = 2024
    out5.innerHTML = b - inp5.value + " р"
}

// 3 Запитай довжину сторони квадрата
let inp6 = document.querySelector('.inp6')
let out6 = document.querySelector('.out6')
let btn6 = document.querySelector('.btn6')

btn6.onclick = () => {
    const c = 4
    let inp6V = parseFloat(inp6.value)
    out6.innerHTML = c * inp6V
}

// Мінімум

// 1 В окремому Html

// 2 Назви змінних
let firstName1 = "John";
let lastName1 = "Doe";
let fullName1 = firstName1 + " " + lastName1;
let firstName2 = "John";
let lastName2 = "Doe";
let fullName2 = firstName2 + " " + lastName2;
let firstName3 = "John";
let lastName3 = "Doe";
let fullName3 = firstName3 + " " + lastName3;
let firstName4 = "John";
let lastName4 = "Doe";
let fullName4 = firstName4 + " " + lastName4;

// let 1name = "Alex";
// let @lastName = "Smith";
// let full-name = "Bob";
// let last name = "Johnson";
// let 2age = 25;


// 3 Вкажи всі можливі способи коментування коду;

// коментуємо рядок

/* коментуємо
більше
1-го
рядка
*/
// 4 Cтилі написання імен змінних

/*
Camel Case: Перша літера кожного слова, крім першого, починається з великої літери.
Наприклад: myVariableName
.
Pascal Case: Кожне слово починається з великої літери, включаючи перше.
Наприклад: MyVariableName.

Snake Case: Усі слова розділяються символом підкреслення _.
Наприклад: my_variable_name.
Kebab Case: Усі слова розділяються дефісом -.
Цей стиль часто використовується в CSS, але не рекомендується для імен змінних у JavaScript.
Наприклад: my-variable-name.
 */
