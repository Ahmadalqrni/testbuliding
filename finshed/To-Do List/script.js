let user_input = document.getElementById("User-Input");
let add_button = document.getElementById("Add-Task-Button");
let todo_list = document.getElementById("To-Do-List");

add_button.addEventListener("click", function() {
    let task = user_input.value;
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let list_item = document.createElement("li");
    list_item.textContent = task;

    let delete_button = document.createElement("button");
    delete_button.textContent = "Delete";
    delete_button.addEventListener("click", function() {
        todo_list.removeChild(list_item);
    });

    list_item.appendChild(delete_button);
    todo_list.appendChild(list_item);

    user_input.value = "";
});