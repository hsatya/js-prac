// const accountId = 1445533;
// let accountEmail = "harshit@gmail.com";
// var accountPassword = "12345";
// accountCity = "Khargone";
// let accountState;
// var accountCountry;

// accountId = 2;

// console.log(accountId);
// console.table([
//   accountId,
//   accountEmail,
//   accountPassword,
//   accountCity,
//   accountState,
//   accountCountry,
// ]);

const country = "Bharat";
const continent = "Asia";
const population = 142.86;

let isIsland = false;
let language;

// console.table({
//   countrydt: typeof country,
//   continentdt: typeof continent,
//   populationdt: typeof population,
//   isIslanddt: typeof isIsland,
//   languagedt: typeof language,
// });

language = "Hindi";
console.table({
  country,
  continent,
  population,
  isIsland,
  language,
});

const message = `${country} is in ${continent}, and it's ${population} people speaks ${language}.`;
console.log(message);

// console.table({
//   countrydt: typeof country,
//   continentdt: typeof continent,
//   populationdt: typeof population,
//   isIslanddt: typeof isIsland,
//   languagedt: typeof language,
// });
