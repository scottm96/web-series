// .map()

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

console.log(squares)

function square(element){
    return Math.pow(element, 2)
}

const students = ['solar', 'annie', 'parasoul', 'eliza']
const studentsup = students.map(upper)

console.log(studentsup)


function upper(element){
    return element.toUpperCase();
}


const dates = ['2024-1-23', '2003-8-12', '2014-5-28'];
const formattedDates = dates.map(formatDates)

console.log(formattedDates)
function formatDates(element){
    const parts = element.split('-')
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}