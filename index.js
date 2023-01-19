let inputBill = document.querySelector(".inputBill")
let billNumber = parseInt(inputBill.value)

let people = document.querySelector(".people")
let peopleNumber = parseInt(people.value)

let buttons = document.querySelectorAll(".btn")
let Resultado = document.querySelector(".result")
let ResultadoTotal = document.querySelector(".resultTotal")

let alert = document.querySelector(".alert")

let tipValue = 5;
buttons.forEach(element => {
    element.addEventListener('click', event => {
        tipValue = parseInt(event.target.innerText.slice(0, -1))
        calculateTip()
    })
})

//actualizar bill
inputBill.addEventListener('input', () => {
    billNumber = parseFloat(inputBill.value)
    calculateTip()
})

//actualizar people
people.addEventListener('input', () => {
    peopleNumber = parseFloat(people.value)

    if (peopleNumber == 0 || peopleNumber == isNaN(peopleNumber)) {
        alert.innerText = "Can't be 0"
    } else {
        alert.innerText = ""
    }
    calculateTip()
})

//reset 
let resetBtn = document.querySelector(".reset")
resetBtn.addEventListener('click', () => {
    inputBill.value = "";
    billNumber = 0;
    people.value = "";
    peopleNumber = 0;
    custom.innerText = "Custom";
    Resultado.innerText = "$0.00";
    ResultadoTotal.innerText = "$0.00";
    alert.innerText = ""
})

// actualizar custom
let custom = document.querySelector(".custom")
custom.addEventListener('input', () => {
    tipValue = parseInt(custom.value);
    if (isNaN(tipValue)) {

    } else {    
        calculateTip()}
})


function calculateTip() {
    Resultado.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);
    ResultadoTotal.innerText = (((billNumber * tipValue / 100) + billNumber) / peopleNumber).toFixed(2);
}
