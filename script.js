function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todo-input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("todo-input").value = "";

    li.onclick = function() {
        this.parentNode.removeChild(this);
    }
}
