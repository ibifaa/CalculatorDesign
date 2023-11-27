

class Calculator{
    constructor(prevOperandText, currentOperandText){
        this.prevOperandText = prevOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    delete(){
            this.currentOperand = this.currentOperand.slice(0,-1);
            // console.log("I am deleted")
        }

    clear(){
        this.prevOperand = '';
        this.currentOperand ='';
        this.operation = undefined;

    }

    appendNumber(number){
       
        if(number== '.'  && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
        // console.log("i am a number")

    }

    selectOperation(operation){
        if(this.currentOperandText === '') return
        if(this.prevOperandText !== ''){
            this.compute()
        }
        this.operation = operation;
        this.prevOperand =  this.currentOperand
        this.currentOperand = ''
        //   console.log("i am a operator")
    }

    compute(){
        let computation;
        const prev = parseFloat(this.prevOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case "+":
               computation = prev + current;
                break;
            
            case "-":
                computation = prev -current;
                break;
            
            case "*":
                computation = prev*current;
                break
            
            case "/":
                if(current === 0) return
                computation = prev/current;
                break
            
            default:
                return

            }

            this.currentOperand = computation;
            this.operation = undefined;
            this.prevOperand = '';

    }

    getDisplayNumber(number){
        let stringNumber = number.toString()
        let integerDigits = parseFloat(stringNumber.split('.')[0])
        let decimalDigits = stringNumber.split('.')[1];
      let integerDisplay;
       if(isNaN(integerDigits)){
        integerDigits = ''
       } else {
        integerDisplay = integerDigits.toLocaleString('en', {
                minimumFractionDigits:0})
       }
       if(decimalDigits != null){
        return `${integerDisplay}.${decimalDigits}`
       } else{
        return integerDisplay;
       }
    }



    updateDisplay(){
        this.currentOperandText.innerText = 
        this.getDisplayNumber(this.currentOperand);
        if(this.operation != null){
            this.prevOperandText.innerText = 
            `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;
        } else {
            this.currentOperandText.innerText=''
        }
        
    }

}

    







let prevOperandText = document.querySelector("[data-previous-operand]");
let currentOperandText = document.querySelector("[data-current-operand]");
let numberBtn = document.querySelectorAll("[data-number]");
let operatorsBtn = document.querySelectorAll("[data-operation]");
let deleteButton = document.querySelector("[data-delete]")
let equalsButton = document.querySelector("[data-equalto]")
let clearButton = document.querySelector("[data-all-clear]")

const calculator = new Calculator(prevOperandText, currentOperandText);
numberBtn.forEach(button => {
    button.addEventListener("click", ()=>{
        calculator.appendNumber(button.innerHTML);
        calculator.updateDisplay();

        
    })
    
    })


    operatorsBtn.forEach(button => {
        button.addEventListener("click", ()=>{
            calculator.selectOperation(button.innerHTML);
            calculator.updateDisplay();
        })
        
        })
    
    equalsButton.addEventListener("click", ()=>{
        calculator.compute();
        calculator.updateDisplay();
    })

    clearButton.addEventListener("click", ()=>{
        calculator.clear();
        calculator.updateDisplay();
    })

    deleteButton.addEventListener("click", ()=>{
        calculator.delete();
        calculator.updateDisplay();
    })
       
        
    