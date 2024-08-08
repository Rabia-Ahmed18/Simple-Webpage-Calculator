const number1 =document.getElementById("num1") as HTMLInputElement;
const number2 =document.getElementById("num2") as HTMLInputElement;
const addBtn = document.getElementById("Add") as HTMLButtonElement;
const subBtn = document.getElementById("Sub") as HTMLButtonElement;
const MultBtn = document.getElementById("Mul") as HTMLButtonElement;
const divBtn = document.getElementById("Div") as HTMLButtonElement;

const printResult = document.getElementById("result") as HTMLOutputElement;


function addNumbers ():void{
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    const result = a + b;
    printResult.textContent = result.toString();
    
};
addBtn.addEventListener("click" , addNumbers)

function subNumbers():void{
    let  a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    const result = a - b;
    printResult.textContent = result.toString();

}
subBtn.addEventListener("click" , subNumbers);

function mulNumbers():void{
    let  a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    const result = a * b;
    printResult.textContent = result.toString();

}
MultBtn.addEventListener("click" , mulNumbers);

function divNumbers():void{
    let  a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    const result = a / b;
    printResult.textContent = result.toString();

}
divBtn.addEventListener("click" , divNumbers);