function app() {
    const radius = prompt("반지름을 입력하세요");
    const radiusNum = parseInt(radius, 10);
    const area = areaOfCircle(radius);
    alert("원의 넓이는" + area + "입니다");
}
function areaOfCircle(radius) {
    return 3.14 * radius * radius;
}

function isEven(num) {
    return (num % 2) === 0;

    // if ((num % 2) === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
}

function max(a, b) {
    return a > b ? a : b;

    // if (a > b) {
    //     return a;
    // } else {
    //     return b;
    // }
}

function fizzBuzz(num) {
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
}

fizzBuzz(3); // "Fizz"
fizzBuzz(5); // "Buzz"
fizzBuzz(15); // "FizzBuzz"
fizzBuzz(1); // 1

function grade(kor, eng, math) {
    const total = kor + eng + math;
    const average = total / 3;
    if (average >= 90) return "수";
    if (average >= 80) return "우";
    if (average >= 70) return "미";
    if (average >= 60) return "양";
    return "가";
}

function getDayOfWeek(dayNum) {
    switch (dayNum) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 6: return "Saturday";
        default: return null;
    }
}

getDayOfWeek(0); // "Sunday"
getDayOfWeek(6); // "Saturday"

function displayGugudan(dan) {
    let i = 1;
    while(i <= 9) {
        console.log(dan + ' * ' + i + ' = ' + (dan * i));
        i++;
    }
}
displayGugudan(5);

function fizzBuzzGame(limit) {
    let count = 1;
    while (count <= limit) {
        console.log(fizzBuzz(count));
        count++;
    }
}

function fizzBuzzHtml() {
    document.forms[0].addEventListener('submit', function(e) {
        e.preventDefault();
        const $input = document.querySelector('#fizz-input');
        document.querySelector('#screen').innerHTML = fizzBuzz($input.value);
        $input.value = '';
    })
}
fizzBuzzHtml();
