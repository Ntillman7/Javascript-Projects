const Calculator = { //creating an object to keep track of values
    Display_Value:"0",
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

function Input_Digit(digit) { // modifies the value that started at 0 whenever a button is clicked
    const {Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) { //defining the function that handles decimals
    if (Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) { //defining a funtion that will handle the different operators
    const { First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if(First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        result=Number(result).toFixed (9); //adds fixed amount of number after the decimal
        result= (result *1).toString();//this will remove any trailing 0s
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset () { //defining a function that will reset the calculator to 0 and clear calculations
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { // updates the calculator screen with the contents of Display_Value, uses the input tag from HTML
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display(); //monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event)=> {
    const {target} = event;
    if (!target.matches ('button')) {
        return;
    }
    if (target.classList.contains ('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) { // clears all input
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})