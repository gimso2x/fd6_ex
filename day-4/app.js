function fizzBuzz(num) {
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
}

function loop(cb, count) {
    let i = 1;
    while(i <= count) {
        cb(i++);
    }
}

function asyncLoop(cb, count, timeout) {
    // let i = 1;
    // while(i <= count) {
    //     const index = i;
    //     setTimeout(function() {
    //         cb(index);
    //     }, timeout * index);
    //     i++;
    // }
    let i = 0;
    const intervalId = setInterval(function() {
        if (i++ < count) {
            cb(i);
        } else {
            clearInterval(intervalId);
        }
    }, timeout);
}

// asyncLoop(function (i) {
//     console.log(i);
// }, 5, 1000);

//const log = console.log;
// loop(function(i) {
//     console.log(fizzBuzz(i))
// }, 6);

// setTimeout(function() {
//     console.log(1111);
// }, 2000);
// console.log(2222)
// let i = 1
// setInterval(function() {
//     console.log(fizzBuzz(i++));
// }, 1000);
// console.log(2);

function max(a, b, c, d) {
    if (a > b) {
        if (a > c) {
            if (a > d) {
                return a;
            } else {
                return d;
            }
        } else {
            return c;
        }
    } else {
        if (b > c) {
            return b;
        } else {
            return c;
        }
    }
}

//console.log(max(1, 5));
function max(numbers) {
    let maxNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (maxNum < numbers[i]) {
            maxNum = numbers[i];
        }
    }
    return maxNum;
}
function min(numbers) {
    let minNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (minNumber > numbers[i]) {
            minNumber = numbers[i];
        }
    }
    return minNumber;
}
const numbers = [0, -50,444,1,23,14,5,6,234,99];
//console.log(max(numbers));
//console.log(min(numbers));


function sum(numbers) {
    let total = 0;
    let i = numbers.length;
    while(i--) {
        total += numbers[i]
    }
    return total;
}

function countIf(arr, target) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            result += 1;
        }
    }
    return result;
}


const genders = ["남", "여", "여", "여", "남", "여", "남", "여"];
//console.log(countIf(genders, "남")); // 3
//console.log(countIf(genders, "여")); // 5


function getDayOfWeek(day, code) {
    // const week = {
    //     KR: ["일", "월", "화"],
    //     US: ["Sun", "Mon", "Tue"]
    // }
    // return week[code][day];
    return {
        KR: ["일", "월", "화"],
        US: ["Sun", "Mon", "Tue"]
    }[code][day];
}
//console.log(getDayOfWeek(0, "KR"));
//console.log(getDayOfWeek(1, "US"));


function $(selector) {
    const el = document.querySelector(selector);

    return {
        on: function(eventName, cb) {
            el.addEventListener(eventName, cb);
        },
        addClass: function(className) {

        },
        removeClass(className) {

        }
    };
}
const btn = $("#btn");
btn.on("click", function(e) {
    alert("얼럿!!!!!");
});
btn.addClass("")
btn.removeClass("")

const person = {
    name: "suho",
    age: 36,
    eat: function() {

    }
}

function displayGugudan(dan) {
    let i = 1;
    while(i <= 9) {
        console.log(gugudanFormat(dan, i));
        i++;
    }
}
//displayGugudan(2);

function gugudanFormat(a, b) {
    return `${a} * ${b} = ${a * b}`;
}

function renderHtml(view) {
    const screen = document.querySelector("#screen");
    screen.innerHTML = view;
}

renderHtml(button({className: "btn--big", children: "hihi"}))

function button(props) {
    return `<button class="${props.className}">
                ${props.children}
            </button>`
}
