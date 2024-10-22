let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== "" && !isNaN(currentInput.slice(-1))) {
        currentInput += operator;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculateResult() {
    try {
        currentInput = currentInput.replace(/%/g, "/100");
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();

        if(result === 17) {
            alert("Hala 10pm na pala....");
            alert("sh*t i miss you mode na");
            alert("*nag-iba ng anyo*");
            display.value = "usap na ulit tau plz";  
            
            document.getElementById("soundEffect").play();

            let firstpic1 = document.getElementById('firstpic');
            let secpic2 = document.getElementById('secpic');
            let thirdpic3 = document.getElementById('thirdpic');
            let fourthpic4 = document.getElementById('fourthpic');

            firstpic1.style.display = 'flex';
            secpic2.style.display = 'flex';
            thirdpic3.style.display = 'flex';
            fourthpic4.style.display = 'flex';
        }


    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }

}