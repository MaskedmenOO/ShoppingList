const addItemButton = document.getElementById("addItemButton");
const unorderedList = document.getElementById("unorderedList");
const input = document.getElementById("item");

function createListedItem (){
const ListedItem = document.createElement("li");
const deleteButton = document.createElement("button");
const span = document.createElement("span");
    
    span.textContent = input.value;
    deleteButton.textContent = "delete";
    
    ListedItem.append(span);
    ListedItem.append(deleteButton);
    
    function deleteButtonClicked(){
        ListedItem.remove();
    }

    deleteButton.addEventListener("click", deleteButtonClicked);

    return ListedItem;
}

function addItemButtonClicked (){
    let ListedItem = createListedItem();
    unorderedList.appendChild(ListedItem);
    input.value='';
    input.focus();
}

addItemButton.addEventListener("click",addItemButtonClicked);