const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
   
    calculatorScreen.value = number
}

//event klik number
const numbers = document.querySelectorAll(".number");



let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if(currentNumber === '0'){
    currentNumber = number} else{
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
       inputNumber(event.target.value)
       updateScreen(currentNumber)

    })
   
})

// event klik operator
const operator = document.querySelectorAll(".operator");
operator.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//input operator
const inputOperator = (operator) => {
    if(calculationOperator === ''){
          prevNumber = currentNumber
    }
  
    calculationOperator = operator
    currentNumber = '0'
}

// event klik equal
const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
        calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        default:
            return
    }
    currentNumber=result;
    calculationOperator=''
}



//celar btn
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//decimal
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

//percent
const percent =document.querySelector('.percentage');
percent.addEventListener('click',(event)=>{
let result=0
result= currentNumber / 100;
updateScreen(result)
})