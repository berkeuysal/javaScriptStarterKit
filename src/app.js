console.log("Merhabalar AQ");

let dolarbugun = 9.33;

let dolardun = 9.2;

{
  let dolardun = 9.1;
}

console.log(dolardun);

const eurodun = 11.2;
//eurodun = 11;

console.log(eurodun);

//array
//camel casing
// pascal casing
let konutkredileri = [
  "Konut Kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
  "Özel Konut Kredisi",
];

console.log("<ul>");
for (let index = 0; index < konutkredileri.length; index++) {
  console.log("<li>" + konutkredileri[index] + "</li>");
}
console.log(konutkredileri);

console.log("DENEME");
