const firstName = 'Romet';
const birthDay = '02';      
const birthMonth = '10';
const birthYear = '1993';
const hobbies = ('reading', 'weightlifting');
const object = {
    firstName: firstName,
    birthDay: birthDay,
    birthMonth: birthMonth,
    birthYear: birthYear,
    hobbies: hobbies
}

console.log(object)

//{firstName: 'Romet', birthDay: '02', birthMonth: '10', birthYear: '1993', hobbies: 'weightlifting'} Ma ei saa aru miks ta mõlemat hobi välja ei logi.

const firstName2 = 'Romet';
const birthDate = new Date(02, 11, 1993);
const hobbies2 = ('reading', 'weightlifting');
const object2 = {
    firstName2: firstName2,
    birthDay2: birthDate.getDate(),
    birthMonth2: birthDate.getMonth(),
    birthYear2: birthDate.getFullYear(),
    hobbies2: hobbies2
}

const birthDate = object2.birthDay2 + '.' + object2.birthMonth2 + '.' + object2.birthYear2

console.log(birthDate)

// Midagi on koodis viga, kui ei saa aru mis


