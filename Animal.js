export default class Animal {
  #age;
  #color;
  constructor(name, food, canReproduce, color) {
    this.name = name;
    this.food = food;
    this.canReproduce = canReproduce;
    this.#age = 21;
    this.#color = color;
  }

  isAdult() {
    return this.#age > 18 ? true : false;
  }

  getColor() {
    return this.#color;
  }
}
