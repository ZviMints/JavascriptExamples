document.addEventListener("DOMContentLoaded",() => { // Waiting to all DOM to be loaded
document.querySelector("#new-task").onsubmit = () => {

if(document.querySelector(".TextField").value == '') {
    alert('Empty list!');
    return false;
}

// Create new item for list
const li = document.createElement('li');
li.innerHTML = document.querySelector(".TextField").value;

// add  new item to task list
document.querySelector("#TasksList").append(li);

// clear input field
document.querySelector(".TextField").value = '';

// Stop form from submiting
return false;
}

});

// Note that function() {} is equal to () => {}