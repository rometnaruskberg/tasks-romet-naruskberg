const firstName = 'Romet';
const birthDay = '02';      
const birthMonth = '10';
const birthYear = '1993';
const hobbies = ['reading', 'weightlifting'];
const object = {
    firstName: firstName,
    birthDay: birthDay,
    birthMonth: birthMonth,
    birthYear: birthYear,
    hobbies: hobbies
}

console.log(object)

/*
{firstName: 'Romet', birthDay: '02', birthMonth: '10', birthYear: '1993', hobbies: Array(2)} Ma ei saa aru miks ta hobisid välja ei logi, kui kasutan 
[] sulgude asemel () sulge, siis logib välja ainult viimase hobi.
*/