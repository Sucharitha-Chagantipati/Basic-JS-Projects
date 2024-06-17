// income 
const container = document.getElementById('container')
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const expenseText = document.getElementById('expenseText');
const expensesList = document.getElementById('expensesList');
const remainingAmount = document.getElementById('remaining');
let incomeValue = income.innerHTML;
let remaining ;

function add(){ 
    li = document.createElement('li');
    li.innerHTML = expenseText.value;
    li.classList.add('listElement')
    expensesList.appendChild(li);
    span = document.createElement('span');
    span.innerHTML = parseInt(expense.value);
    li.appendChild(span);
    span.classList.add('span')
    if(expense.value != null){
        remaining = remaining - span.innerHTML;
        remaining = remaining;
        remainingAmount.innerHTML = remaining;
        setData();
    }
    setData();
}

function setData(){
    localStorage.setItem('saved',remaining);
    localStorage.setItem('list',expensesList.innerHTML);
}

function getData(){
    remaining = localStorage.getItem('saved');
    if(remaining != null){
        remaining = remaining;
    }else{
        remaining = incomeValue;
    }
    remainingAmount.innerHTML = remaining;
    expensesList.innerHTML = localStorage.getItem('list');
}
function clearData() {
           localStorage.removeItem('data');
           localStorage.removeItem('list');
           expensesList.innerHTML = '';  
           remainingAmount.innerHTML = incomeValue;
           remaining = incomeValue;
           expenseText.innerHTML = '';
           expense.innerHTML='';
}

getData();
 
