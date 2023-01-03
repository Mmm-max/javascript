/*
let age = prompt('How old are you?', 100) //  promt  вызывает диалоговое окно в модальном окне
alert(`You are ${age} years`)  // alert  вызывает моадльное окно
let test = prompt('test')
alert(`hi ${test}`)
let correct = prompt('correct', '') // correct  возвращает True/False в зависимости, что нажал пользователь
alert(`hi again ${correct}`)

let isBoss = confirm('are you Boss here?')
alert(`hi ${isBoss}`)
*/


// преобразование типов

let value = true;
alert(typeof value); // boolean

value = String(value);
alert(typeof value); // string

alert('100' / 5); // строки преобразуются в числа при использвании мат. операторов


// Числительные преобразования
/*
let str = '123';
alert(typeof str);
let num = Number(str);
alert(typeof num);

alert(Number('124')); // 124
alert(Number('12432f')); // NaN
alert(Number(undefined)); // NaN
alert(Number(null)); // 0
alert(Number(true)); // 1
alert(Number(false)); // 0
*/

// Логические преобразования

/*
alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean('hi')) // truehttps://github.com/Mmm-max/javascript.git
alert(Boolean('')) // false
alert(Boolean(' ')) // true
*/

// Базовые операторы, математика


alert(1 + '1'); // 11
alert(1 + 1 + '2'); // 22

alert('4' - '2'); // 2
alert('6' / '2'); // 3

// Преобразует не числа в числа
alert( +true ); // 1
alert( +"" );   // 0
// На самом деле это то же самое, что и Number(...),
// только короче.

