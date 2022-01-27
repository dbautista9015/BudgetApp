import MakeCard from "./createCard.js";
import {GetLocalStorage, SaveToLocalStorage, RemoveFromLocalStorage} from "./localStorage.js"

let injectHere = document.getElementById('injectHere');
let addExpenseBtn = document.getElementById('addExpenseBtn');

let budgetAmountInput = document.getElementById('budgetAmountInput');
let nameOfExpenseInput = document.getElementById('nameOfExpenseInput');
let expenseAmountInput = document.getElementById('expenseAmountInput');

let cards = document.getElementsByClassName('card mb-3');

let i;

function StartApp() {
    let storedInfo = GetLocalStorage();

    if (storedInfo.length !== 0) {
        storedInfo.forEach(element => MakeCard(element))
        i = document.getElementsByClassName('far fa-trash-alt fa-2x d-flex justify-content-center');

    }

    
}

StartApp();


addExpenseBtn.addEventListener('click', e => {
    if (budgetAmountInput.value === '' || nameOfExpenseInput.value === '' || expenseAmountInput.value === '') {
        alert("You must enter info in all three input fields");
    } else if (budgetAmountInput.value < 0) {
        alert('Budget amount must be a positive number')
    } else if (expenseAmountInput.value < 0) {
        alert("Expense amount must be a positive number")
    } else {
        let budgetObj = {
            budgetAmount: parseInt(budgetAmountInput.value,10),
            expenseName: nameOfExpenseInput.value,
            expenseAmount: parseInt(expenseAmountInput.value, 10)
        }
        MakeCard(budgetObj);
        SaveToLocalStorage(budgetObj);
        
    }

});

for (let index = 0; index < cards.length; index++) {
    console.log("Index: " + index);
    
}






// console.log(cards[0])
// console.log(cards.length);






















