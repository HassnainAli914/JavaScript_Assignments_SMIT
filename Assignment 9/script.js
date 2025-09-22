let add = document.getElementById("add");
let list = document.getElementById("body");

add.addEventListener('click', function () {
    let value = document.getElementById("input").value;
    let item = document.createElement("li");
    let input = document.createElement("input");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.setAttribute('id', 'edit');
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('id', 'delete')

    if (value.trim() !== "") {
        // List item Appearing
        body.appendChild(tr).appendChild(td1).appendChild(item).textContent = value;

        // Buttons Appearing
        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';
        body.appendChild(tr).appendChild(td2).appendChild(editBtn);
        body.appendChild(tr).appendChild(td3).appendChild(deleteBtn);
        value = document.getElementById("input").value = '';
    } else {
        alert("Empty Field Error")
    }
    // Delete Button Functionality
    deleteBtn.addEventListener('click', function () {
        body.removeChild(tr);
    })
    // Edit Button Functionality
    editBtn.addEventListener('click', function () {
        editBtn.textContent = (editBtn.textContent === 'Edit') ? 'Update' : 'Edit';
        if (editBtn.textContent === "Update") {
            input.type = 'search';
            input.value = item.innerText;
            item.replaceWith(input);
        } else {
            item.innerText = input.value;
            input.replaceWith(item)
        }
    })

    console.log(item);
})