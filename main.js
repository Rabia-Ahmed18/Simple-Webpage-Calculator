var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var addBtn = document.getElementById("Add");
var subBtn = document.getElementById("Sub");
var MultBtn = document.getElementById("Mul");
var divBtn = document.getElementById("Div");
var printResult = document.getElementById("result");
function addNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
;
addBtn.addEventListener("click", addNumbers);
function subNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
subBtn.addEventListener("click", subNumbers);
function mulNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printResult.textContent = result.toString();
}
MultBtn.addEventListener("click", mulNumbers);
function divNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printResult.textContent = result.toString();
}
divBtn.addEventListener("click", divNumbers);
