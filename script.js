

class Calculator{
    constructor(prevOperandText, currentOperandText){
        this.prevOperandText = prevOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    clear(){
        this.prevOperand = '';
        this.currentOperand ='';
        this.operation = undefined;

    }

    delete(){
            this.currentOperand = this.currentOperand.slice(0,-1);
        }

    

    appendNumber(number){
       
        if(number== '.'  && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
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

            console.log(computation)

    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const [integerPart, decimalPart] = stringNumber.split('.');
        
        const formattedInteger = isNaN(parseInt(integerPart))
      ? ''
      : parseInt(integerPart).toLocaleString('en', { minimumFractionDigits: 0 });
    
        if (decimalPart) {
          return `${formattedInteger}.${decimalPart}`;
        } else {
          return formattedInteger;
        }
      }
    
      updateDisplay() {
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand);
    
        if (this.operation !== undefined) {
          this.prevOperandText.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;
        } else {
          this.prevOperandText.innerText = '';
        }
      }

//     getDisplayNumber(number){
//         let stringNumber = number.toString()
//         let integerDigits = parseInt(stringNumber.split('.')[0])
//         let decimalDigits = stringNumber.split('.')[1];
     
//       if(isNaN(integerDigits)){
//         return  '' 
//       } else{
//         let integerDisplay = integerDigits.toLocaleString('en', {minimumFractionDigits:0})
//         return decimalDigits ? console.log(`InterDisplay: ${integerDisplay}.${decimalDigits}`) : console.log(`InterDisplay: ${integerDisplay}`);
//       }
//     //  const formattedInteger = isNaN(number) ? '' : integerDisplay;
//     // return decimalDigits ? `${integerDisplay}.${decimalDigits}` : integerDisplay;

//     }

    
 

// // if(isNaN(integerDigits)) {
// //     integerDigits == ''
// // } else {
    
// // }if(decimalDigits != null){
// //     return integerDisplay;
// // }

      
//     //    if(isNaN(integerDigits)){
//     //     integerDigits = ''
//     //    } else {
//     //     integerDisplay = integerDigits.toLocaleString('en', {
//     //             minimumFractionDigits:0})
//     //    }
//     //    if(decimalDigits != null){
//     //     return `${integerDisplay}.${decimalDigits}`
//     //    } else{
//     //     return integerDisplay;
//     //    }

//     //    console.log(integerDisplay)
    

//     // getDisplayNumber(number) {
//     //     const formattedInteger = isNaN(number) ? '' : number.toLocaleString('en', { minimumFractionDigits: 0 });
//     //     const decimalDigits = number.toString().split('.')[1];
        
    
//     //     return decimalDigits ? `${formattedInteger}.${decimalDigits}` : formattedInteger;

   

        
//     // }
    



//     updateDisplay(){

//         this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand)
//         console.log(`currentOperandText: ${currentOperandText}`)

//         if(this.operation !== null){
//             if (this.prevOperand !== null) {
//                 this.prevOperandText.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;
//         } else{
//             currentOperandText.innerText = this.getDisplayNumber(this.currentOperand);
  
//         }
//     }
// }
        
          // this.currentOperandText.innerText = this.currentOperand;
        // this.prevOperandText.innerText = this.prevOperand}
    //     let checkedValue = this.getDisplayNumber(this.currentOperand);
    //     console.log(checkedValue)
    //     let returnValue = checkedValue.toString() + this.operation.toString()
    //     if(this.operation != null){
    //     return this.currentOperandText.innerText = returnValue
    //     } else {
    //         this.currentOperandText.innerText=''
    //     }
        
    // }

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
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();

        
    })
    
    })


    operatorsBtn.forEach(button => {
        button.addEventListener("click", ()=>{
            calculator.selectOperation(button.innerText);
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
       
        
    