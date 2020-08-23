class Person {
  constructor(name) {
    this.name = name;
  }
  eat(food) {
    const arr = [...[1,2,3]]
    console.log(`${this.name}이 ${food}를 먹는다`)
  }
}
export default Person;
//module.exports = Person;