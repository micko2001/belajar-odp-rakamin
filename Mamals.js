import Animal from "./Animal.js";

export default class Mamals extends Animal {
  constructor(name, food, color) {
    super(name, food);
  }

  isColored() {}
}
