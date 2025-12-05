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

    //NORMAL OPERATOR BUTTONS
    if(clickedElement.tagName === "BUTTON" && clickedElement.id != "result-button"
        && clickedElement.id != "delete-button" && clickedElement.id != "all-clear-button"){
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

    //RESULT BUTTON
    if(clickedElement.tagName === "BUTTON" && clickedElement.id == "result-button"){
        if(operator == '' || rightSide == ''){
            return;
        }
        let result = calculate();
        display.textContent = `${result}`;
    }

    //DELETE BUTTON
    if(clickedElement.tagName === "BUTTON" && clickedElement.id == "delete-button"){
        if(rightSide != ''){
            rightSide =  rightSide.slice(0, -1);
            display.textContent = display.textContent.slice(0, -1)
        }else if(operator != ''){
            operator = '';
            display.textContent = display.textContent.slice(0, -1)
        }else if(leftSide != ''){
            leftSide = leftSide.slice(0, -1);
            display.textContent = display.textContent.slice(0, -1)
        }
    }

    //ALL CLEAR BUTTON
    if(clickedElement.tagName === "BUTTON" && clickedElement.id == "all-clear-button"){
        leftSide = '';
        operator = '';
        rightSide = '';
        display.textContent = '';
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
    if(b == 0){
        alert("Very cheeky!");
        display.textContent = "ERROR!"
        return "";
    };
    return Number((a/b).toFixed(11)); //Converting the result (which becomes a string) back to a number
};

//<------------->

//CALCULATE FUNCTION
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

    leftSide = result; //Make the result the left side for continuity, soft-reset every other value.
    operator = '';
    rightSide = '';
    
    return result;
};


