/*
OOP
-Encapsulation --> sama seperti bungkus obat kapsul, dibungkus kapsul
agar tidak terlihat komposisi serbuk di dalamnya dan masih menjalankan
satu fungsi.

agar tidak encapsulation breaking maka bisa dibuat method yang hanya make sure dan jawabanyanya 
berbeda type data dengan data privatenya, misal data KTP, dan method hanya jawab bahwa dia 
diatas 18 tahun atau tidak.



-Inheritance
-Abstranction
-Polymorphism
overwrite yang ada di parentnya


 */

//object

import Animal from "./Animal.js";
import Mamals from "./Mamals.js";

const Tiger = new Animal("Macan", "herbivore", true);
const Fish = new Mamals("Lele", "omnivore");

console.log(Tiger.isAdult());
console.log(Fish);
