// Each item should look like this:
// <li><input type="checkbox"/><span>Write this tutorial</span></li>


function addNewItem() {
	var listItem = document.createElement("li");
	listItem.innerText = "Hello";

	var list = documment.getElementBy("todoList")
	list.appendChild(listItem);
}

var btnNew = document.getElementById("btnAdd");
btnNew.onclick = addNewItem;
};

