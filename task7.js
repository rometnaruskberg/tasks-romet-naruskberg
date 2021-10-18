var getFiveNumbers = [];

for (let i = 0; i < 5; i++){
    getFiveNumbers.push(randomNumber());
}
console.log(randomNumber())

function randomNumber() {
    return Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(getFiveNumbers)

function getBiggestNumbers(getFiveNumbers){
    return Math.max.apply(0, getFiveNumbers);
}
console.log(getBiggestNumbers(getFiveNumbers))

function getSmallestNumbers(getFiveNumbers){
    return Math.min.apply(0, getFiveNumbers);
}
console.log(getSmallestNumbers(getFiveNumbers))

function getEvenNumbers(even){
    var evenNumber = [];
    for (let i = 0; i < even.length; i++){
        if (even[i] % 2 === 0){
            evenNumber.push(true);
        }
    }
    return evenNumber.length
}
console.log(getEvenNumbers(getFiveNumbers))