let display = document.querySelector("#display")
let leftSide = '';
let operator = '';
let rightSide = '';


//NUMBER CONTAINER
let numberContainer = document.querySelector("#number-side");
numberContainer.addEventListener("click", (event)=>{
    let clickedElement = event.target;
    if(clickedElement.tagName === "BUTTON"){
        if(operator == ''){ //Check if an operator has been placed
            leftSide += clickedElement.textContent; //Until it is, make everything clicked the left side
            display.textContent += clickedElement.textContent; 
                console.log(leftSide)
        }else if (operator != ''){ //If an operator is there, make everything else the rightSide.
            rightSide += clickedElement.textContent;
            display.textContent += clickedElement.textContent;
                console.log(rightSide)
        }
    }
});


//OPERATOR CONTAINER
let operatorContainer = document.querySelector("#operator-side");
operatorContainer.addEventListener("click", (event)=>{
    let clickedElement = event.target;

    if(clickedElement.tagName === "BUTTON" && clickedElement.id != "result-button"){
        if(operator == ''){ //Check if an operator has already been placed
            if(clickedElement.textContent == "÷"){
                operator = "/";
            }else if(clickedElement.textContent == "X"){
                operator = "*";
            }else{
                operator = clickedElement.textContent;
            }
            //Since the division and multiplication options are invalid operators by themselves
            display.textContent += clickedElement.textContent; 
                console.log(operator)
        }else{ //On a second operator placement, calculate result and then place operator.
            let result = calculate();
            display.textContent = `${result}`;

            if(clickedElement.textContent == "÷"){
                operator = "/";
            }else if(clickedElement.textContent == "X"){
                operator = "*";
            }else{
                operator = clickedElement.textContent;
            }

            display.textContent += clickedElement.textContent;
            
            
        }
    }

    if(clickedElement.tagName === "BUTTON" && clickedElement.id == "result-button"){
        let result = calculate();
        display.textContent = `${result}`;
    
        // console.log(leftSide)
        // console.log(operator)
        // console.log(rightSide)
    }
});


//BASIC FUNCTIONS ------------->
function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return Number((a/b).toFixed(2)); //Converting the result (which becomes a string) back to a number
};

//<------------->

function calculate(){
    let left = Number(leftSide);
    // console.log(leftSide)
    let right = Number(rightSide);
    // console.log(rightSide)
    let result;
    switch(operator){
        case "+":
            result = add(left, right);
            break;
        case "-":
            result = subtract(left, right);
            break;
        case "*":
            result = multiply(left, right);
            break;
        case "/":
            result = divide(left, right);
            break;
    }

    leftSide = result;
    operator = '';
    rightSide = '';
    
    return result;
};


