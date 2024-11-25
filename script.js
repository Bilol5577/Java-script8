let fruit1 = prompt("Meva nomini yozing");
let fruit2 = prompt("Meva nomini yozing");
let fruit3 = prompt("Meva nomini yozing");
let fruit4 = prompt("Meva nomini yozing");
let fruit5 = prompt("Meva nomini yozing");
let letterSearch = [fruit1,fruit2,fruit3,fruit4,fruit5];
console.log(letterSearch);

let withN = [];
let withoutN = [];

letterSearch.forEach(word => {
  if (word.toLowerCase().includes('n')) {
    withN.push(word);
  } else {
    withoutN.push(word);
  }
});

console.log("n harfi qatnashgan so'zlar:", withN);
console.log("n harfi qatnashmagan so'zlar:", withoutN);