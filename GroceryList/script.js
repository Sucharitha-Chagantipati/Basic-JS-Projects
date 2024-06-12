const inputItem = document.getElementById('inputItem');
const itemContainer = document.getElementById('item-container');

function addItem(){
    if(inputItem == ''){
        alert('add something to the list');
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputItem.value;
        itemContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputItem.value = ''
}

itemContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
       saveData();
    }

})

function saveData(){
    localStorage.setItem("save",itemContainer.innerHTML)
}

function getData(){
    itemContainer.innerHTML = localStorage.getItem("save");
}

getData();
