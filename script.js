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
            leftSide += clickedElement.textContent; //If not, make the clicked element the first number
            display.textContent += clickedElement.textContent; 
                console.log(leftSide)
        }else if (operator != ''){ //If an operator is there, make this the rightSide.
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
        if(rightSide == '' && operator == ''){ //Check if there is already a number on the right side
            if(clickedElement.textContent == "÷"){
                operator = "/"
            }else if(clickedElement.textContent == "X"){
                operator = "*"
            }else{
                operator = clickedElement.textContent;
            }
            //Since the division and multiplication options are invalid operators by themselves
            display.textContent += clickedElement.textContent;
                console.log(operator)
        }
    }

    if(clickedElement.tagName === "BUTTON" && clickedElement.id == "result-button"){
        let result = calculate();
        display.textContent = `${result}`;

        console.log(leftSide)
        console.log(operator)
        console.log(rightSide)
    }
});



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

    // console.log(result);
    return result;
};


