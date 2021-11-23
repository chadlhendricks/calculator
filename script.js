let sum = "";

function addToSum(operator) {
    sum = sum + operator;
    document.getElementById("output").innerText = sum;
}

function evaluateSum() {    
    document.getElementById("output").innerText = eval(sum);
}

function clearSum(operator) {
    sum = "";
    document.getElementById("output").innerText = sum;
};

function backspace() {
    sum = sum.slice(0,-1);
    document.getElementById("output").innerText = sum;
}