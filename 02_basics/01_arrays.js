// const myArray = [1, 2, 3, 4];

// const newArray = myArray.join(", ");
// console.log(newArray);

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// marvel_heros.pop();
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros);
const all_heros = [...dc_heros, ...marvel_heros];

// console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(another_array);
// console.log(real_another_array);

console.log(Array.isArray("Harshit"));
console.log(Array.from("Harshit"));
console.log(Array.from({ name: "Harshit" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

let x = [1, 2, 3];
let y = x;
let z = [1, 2, 3];
x[0] = 4;
console.log(x, y, z);
