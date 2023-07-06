function add(num1,num2){

    return num1 + num2;
}

function substract(num1,num2){

    return num1 - num2;
}

function multiply(num1,num2){

    return num1 * num2;
}

function divide(num1,num2){

    if(num2 == 0){
        return "Mathematocal Error"
    }

    return num1/num2;
}


function operate(num1,num2,operator){

    if (operator == "+"){

        add(num1,num2);
    } 
    else if(operator == "-"){

        substract(num1,num2);
    }
    else if(operator == "x"){
        multiply(num1,num2);
    }
    else if(operator == "/"){

        divide(num1,num2);
    }

}



let display = document.getElementById("display-text");
let buttons = document.querySelectorAll("button");
let number1 = 0;
let number2 = 0;
let operator = null;


buttons.forEach(button => {

    button.addEventListener("click", function(){

        if(button.classList.contains("number")){

            display.innerText += button.innerText;

        }
        
        
        else if(button.classList.contains("Operator")){
            
            number1 = parseInt(display.innerText);
            
            operator = button.innerText;
    
            display.innerText = "";
        }
        else if(button.classList.contains("equal")){

            number2 = parseInt(display.innerText);
            display.innerText = operate(number1,number2,operator);

        }
        
        else if(button.classList.contains("clear")){
            
            display.innerText = "";
        }
    });
});
