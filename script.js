var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

//checks length of input
function inputLength() {
	return input.value.length;
}

function createListElement() {
	//creates new li element in the ul, taking in the input value
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	//creates button element next to each li that on click will remove the li
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete!"));
	li.appendChild(button);
	button.onclick=removeParent;
}

//function for removing the entire element by clicking button created with new li element
function removeParent(event){
	event.target.parentNode.remove();
} 

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//when the target that gets clicked has a tag name of li, we toggle the "done" class
function toggleDoneAfterClick(event) {
	if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDoneAfterClick);