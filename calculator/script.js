class Calculator{
  constructor(previousText,currentText){
     this.previousText = previousText
     this.currentText = currentText
     this.clearButton()
  }

  clearButton(){
      this.previous = ''
      this.current = ''
      this.operation = undefined
  }

  deleteButton(){
    this.current = this.current.toString().slice(0,-1)
  }

  appendNumber(number){
    if(number == '.' && this.current.includes('.') ) return
    this.current = this.current.toString() + number.toString()
  }

  chooseOperation(operation){
    if(this.current == '') return
    if(this.previous != ''){
        this.compute()
    }
    this.previous = this.current 
    this.operation = operation
    this.current = ''
  }

  compute(){
    let computation
    const prev = parseFloat(this.previous)
    const curr = parseFloat(this.current)
    if(isNaN(prev) || isNaN(curr)) return
    switch(this.operation){
        case '+':
            computation = prev + curr
            break
        case '-':
            computation = prev - curr
            break
        case '×':
            computation = prev * curr
            break
        case '÷':
            computation = prev / curr
            break
        default:
            return
    }
    this.previous = ""
    this.current = computation
    this.operation = undefined
  }

  updateDisplay(){
    this.currentText.innerText = this.current
    if(this.operation != null ){
        this.previousText.innerText = `${this.previous} ${this.operation} `
    }else{
        this.previousText.innerText = ''
    }
  }
}

const previousText = document.querySelector('[data-previous]')
const currentText = document.querySelector('[data-current]')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const equalButton = document.querySelector('[data-equal]')
const clearButton = document.querySelector('[data-clear]')

const calculator = new Calculator(previousText,currentText)

numberButtons.forEach(button => {
    button.addEventListener("click",()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButton.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

deleteButton.addEventListener("click",button =>{
    calculator.deleteButton()
    calculator.updateDisplay()
})

clearButton.addEventListener("click", button =>{
    calculator.clearButton()
    calculator.updateDisplay()
})

equalButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})
