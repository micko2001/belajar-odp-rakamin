import Animal from "./Animal.js";

export default class Mamals extends Animal {
  constructor(name, food, canReproduce, color) {
    super(name, food, canReproduce, color);
  }

  isColored() {
    return this.getColor() !== "white" ? true : false;
  }
}
//halo semua
