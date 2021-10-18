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
const bDay = new Date(1993, 11, 11);
const hobbies2 = ['reading', 'weightlifting'];
const object2 = {
    firstName2: firstName2,
    birthYear2: bDay.getFullYear(),
    birthMonth2: bDay.getMonth(),
    birthDay2: bDay.getDate(),
    hobbies2: hobbies2
}

const bDay2 = object2.birthYear2 + '.' + object2.birthMonth2 + '.' + object2.birthDay2

console.log(bDay2)