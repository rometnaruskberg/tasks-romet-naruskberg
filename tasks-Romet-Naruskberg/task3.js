function greet(name) {
  let result = 'Hello, ' //Logides paneb selle teksti kõigele ette, kindlasti ka tühik.
  if (Array.isArray(name)) {
    result += name[0] + ' and ' + name[1]
  } 
  else if (name) {
    result += name
  }
  else {
    result += 'my friend'
  }
  return result + '.'
}
const result1 = greet('Romet')
console.log(result1) // Console log sai 'Hello, Romet.'

const result2 = greet()
console.log(result2) // Console log sai 'Hello, my friend.'

const result3 = greet(['Jill', 'Jane'])
console.log(result3) // Console log sai 'Hello, Jill and Jane.'