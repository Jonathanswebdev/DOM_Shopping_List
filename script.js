
//  List Code

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  //   Removing list items

  li.addEventListener("click", function () {
    var finished = this.classList.toggle("done");
    var removeButton = document.createElement("button");
    removeButton.classList.add("deleteButton");

    if (finished) {
      removeButton.appendChild(document.createTextNode("x"));
      removeButton.classList = "deleteButton";
      li.appendChild(removeButton);

      removeButton.addEventListener("click", function () {
        this.parentElement.remove();
      });
    } else {
      this.getElementsByClassName("deleteButton")[0].remove();
    }
  });
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.code === "Enter") {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
