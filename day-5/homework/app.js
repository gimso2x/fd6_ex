const people = [{
    name: "김수호",
    age: 36
}, {
    name: "홍길동",
    age: 70
}, {
    name: "김영희",
    age: 15
}, {
    name: "김철수",
    age: 18
}, {
    name: "박지성",
    age: 37
}, {
    name: "김태희",
    age: 38
}, {
    name: "정지훈",
    age: 41
}];

/**
 * Array 메소드 연습
 * 1. 19살 이상인 사람들 찾기
 * 2. 김씨성을 가진 사람들 찾기
 * 3. 이름이 박지성인 사람 객체 찾기
 * 4. 이름이 박지성인 사람의 index 찾기
 */

const adult = people.filter(function(person){
    return person.age >= 19
})

const kims = people.filter(function(person){
    return person.name.startsWith("")
})

const kimta = people.find(function(person) {
    return person.name === "김태희"
})

const parkIndex = people.findIndex(function(person) {
    return person.name === "김태희"
})

