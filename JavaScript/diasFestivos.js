
let givenDay = document.getElementById('day')
let givenMonth = document.getElementById('month')
let givenYear = document.getElementById('year')

let button = document.getElementById('calculate')

let answer = document.getElementById('result')

let days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]


const getWorkingDay = (dayOfTheWeek) => {
    switch (dayOfTheWeek) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "día laborable"
            break;

        default:
            return "fin de semana"
            break;
    }
    
}


const calculate = () => {
    const dt = new Date(givenYear.value, givenMonth.value - 1, givenDay.value)
    const dayOfTheWeek = dt.getDay()
    answer.value = `${days[dayOfTheWeek][0].toUpperCase()+days[dayOfTheWeek].slice(1)}, ${getWorkingDay(dayOfTheWeek)}`
}

const validateInfo = event => {
    event.preventDefault()
    givenYear.value && givenMonth.value && givenDay.value ? calculate() : 
    alert('Verifica que el mes esté en su representación númerica. ej Febrero/ 02')
}

            button.addEventListener("click", validateInfo)



/* const nombreDelDiaSegunFecha = fecha => [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
  ][new Date(fecha).getDay()]
 */