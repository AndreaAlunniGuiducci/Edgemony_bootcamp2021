let str = prompt("Inserisci 5 nomi separati da ua virgola", `Stefania,Sandro,Maria,Giacomo,Giorgia`);
let arr = [32, 21, 47, 12, 78];
let nomi = str.split(",");
nomi.splice(3, 1);
nomi.unshift("Giacomo");
nomi.splice(4, 1 ,"Marta", "Giorgia", "Franco", "Valentina");
arr.splice(3, 1);
arr.unshift(12);
arr.splice(4, 1, 6, 78, 54, 32);

nomi.push(arr);

console.log(nomi);