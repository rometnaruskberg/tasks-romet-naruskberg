let str1 = '';
let str2 = 'tere';
let str3 = 'minu nimi on John';
console.log(!!str1) // !! muudab booleaniks(true or false)
console.log(!!str2)
console.log(!!str3)

console.log(Boolean(str1))
console.log(Boolean(str2))
console.log(Boolean(str3))

//false on tühi, true ei ole tühi

const str4 = str1.charAt(0).toUpperCase() + str1.slice(1); //Tähe suuremaks tegemine algab Esimesest tähest(0-esimene) ja lõppeb teisega (1-teine)
console.log(str4)

const str5 = str2.charAt(0).toUpperCase() + str2.slice(1);
console.log(str5)

const str6 = str3.charAt(0).toUpperCase() + str3.slice(1);
console.log(str6)