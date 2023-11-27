// Declaring Variables
const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");
let addTask = document.getElementById("addTask").addEventListener('click',taskAdd);

// Creating a function for button onclick 
function taskAdd (){
    if (inputBox.value === ' '){
        alert ("Please enter a valid task")
    } else {
//creates one element with element li when info is entered and button clicked
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = " "; 
    saveData();
}
// checked and unchecked list items and to remove items
listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// to store information in browser after refreshing or closing
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

// to display the saved data whenever we open the web browser
function showList () {
    listContainer.innerHTML = localStorage.getItem("data");
}showList() ;