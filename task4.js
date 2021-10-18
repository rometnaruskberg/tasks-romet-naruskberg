const colors = ['Red', 'Green', 'White', 'Black'];
let dot = '';
for (let i = 0; i < colors.length; i++) {
    dot += (colors[i] + '.')
}

console.log(dot) 

let comma = '';
for (let i = 0; i < colors.length; i++) {
    comma += (colors[i] + ',')
}

console.log(comma)

let plus = '';
for (let i = 0; i < colors.length; i++) {
    plus += (colors[i] + '+')
}

console.log(plus)
