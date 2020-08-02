// <함수 스코프>
const aaaa = "a"
function functionScope() {
    console.log(aaaa)
    const aaaa = 1
}
// TDZ: Temporal Dead Zone
// </함수 스코프>


// <블록 스코프>
function blockScope() {
    var a;
    var b;
    if (true) {
        a = 1;
        b = 2;
        const c = 3;
        let d = 4;
    }
    console.log(a);
    console.log(b);
    console.log(c); //error
    console.log(d); //error
}
// </블록 스코프>


// <실행 컨텍스트 Execution Context>
function ec() {
    const aa = 1;
    let bb = 2;
    console.log(this);
    console.log(arguments[0]);
    console.log(arguments[4]);
}

// 1. VO(Variable Object): local variable, parameter, arguments
// 2. thisValue (this)
// 3. scope chain
// </실행 컨텍스트>

// <this>
// 함수를 호출하는 방법에 의해 결정.
function thisF() {
    console.log(this);
}
//f() // 1. 함수호출
//new thisF(); // 2. new 호출
const obj = {
    func: thisF
}
//obj.func() // 3. 메서드로 호출
//thisF.call({name: "suho"}) // 4. call or apply
//thisF.apply({name: "suho2"})
// </this>

// <closure>
function getClosure() {
    // Lexical Environment
    let a = 1; // 자유 변수
    const b = 3 // 자유 변수
    return function closure(){
        a++;
        a = b + a;
        return a;
    }
}
const closure = getClosure();
console.log(closure());
console.log(closure());
console.log(closure());
// </closure>

// <call stack>
function delay() {
    let i = 1000000000;
    while (i--){}
}
function a() {
    console.log("a");
    delay();
    b();
}
function b() {
    console.log("b")
    delay();
    c();
}
function c() {
    console.log("c")
    delay()
}
//console.time("time")
// setTimeout(function(){
//     console.log("setTimeout")
//     console.timeEnd("time")
// }, 500)
// a();
// </call stack>

// <object>
const student1 = {
    name: "수호",
    hp: 1000,
    study: function(subject) {
        this.hp--;
        console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
    }
}
const student2 = {
    name: "주은",
    hp: 1000,
    study: function(subject) {
        this.hp--;
        console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
    }
}

const student3 = {
    name: "수정",
    hp: 1000,
    study: function(subject) {
        this.hp--;
        console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
    }
}

const student4 = {
    name: "창석",
    hp: 1000,
    study: function(subject) {
        this.hp--;
        console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
    }
}


// 생성자 함수. new 호출하기를 기대하는 함수
// function Student(name, hp) {
//     this.name = name;
//     this.hp = hp;
// }
// Student.prototype.study = function(subject) {
//     this.hp--;
//     console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
// }

class Student {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    study(subject) {
        this.hp--;
        console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
    }
}

const st1 = new Student("수호", 1000)
const st2 = new Student("주은", 1200)
const st3 = new Student("수정", 500)
const st4 = new Student("창석", 500)
// console.log(st1)
// console.log(st2)
// console.log(st3)
// console.log(st4)
// console.log(student)
// st1.study("수학")
// st1.study("수학")
// st1.study("수학")
//console.log(student.toString())
// <object>


// <map>
function getSquare(data) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        const d = data[i] * data[i];
        result.push(d);
    }
    return result;
}
function getUpperAlphabet(data) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        const d = data[i].toUpperCase()
        result.push(d);
    }
    return result;
}

function map(list, cb) {
    const result = [];
    for (let i = 0; i < list.length; i++) {
        const d = cb(list[i]);
        result.push(d);
    }
    return result;
}
const numbers = [1,2,3,4,5,6];
//const even = filter(numbers);
//console.log(even); // [2,4,6]
//const square = getSquare(numbers);
const square = map(numbers, function(v) {
    return v * v;
})
const alphabet = ['a','b','c','d','e']
//const upper = getUpperAlphabet(alphabet);
const upper = map(alphabet, function(v) {
    return v.toUpperCase();
});
//console.log(upper);
//console.log(square);

// </map>
