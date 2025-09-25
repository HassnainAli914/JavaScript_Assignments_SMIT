let add = document.getElementById("add");
let popupClose = document.getElementById("close")
var popup = document.getElementById("popup");
var popupError = document.getElementById("error");

// Custom Popup Functionality
popupClose.addEventListener('click', function () {
    popup.style.display = (popup.style.display === 'none') ? 'block' : 'none';

})

// Add item to List Functionality
add.addEventListener('click', function () {
    let value = document.getElementById("input").value;
    let body = document.getElementById("body");
    let val = body.querySelectorAll("li")
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
    console.log(val[0]);

    // Dublicate items Checking and Item Adding Functionality
    if (value.trim() !== "") {
        var isDuplicate = false;
        val.forEach(li => {
            if (li.textContent.trim() === value.trim()) {
                isDuplicate = true;
                return;
            }
        });
        if (isDuplicate) {
            popup.style.display = 'block';
            popupError.innerText = 'Dublicate List Error!';
            return;
        }
        else {
            // List item Appearing
            body.appendChild(tr).appendChild(td1).appendChild(item).textContent = value;
            // Buttons Appearing
            editBtn.textContent = 'Edit';
            deleteBtn.textContent = 'Delete';
            body.appendChild(tr).appendChild(td2).appendChild(editBtn);
            body.appendChild(tr).appendChild(td3).appendChild(deleteBtn);
            document.getElementById("input").value = '';
            popup.style.display = 'none';
        }
    }
    else {
        popup.style.display = 'block';
        popupError.innerText = 'Empty Field Error!';
    }


    console.log(`Item Added Successfully Added Named = ${item.innerText}`);

    // Delete Button Functionality
    deleteBtn.addEventListener('click', function () {
        body.removeChild(tr);
    });

    // Edit Button Functionality
    editBtn.addEventListener('click', function () {

        // Dublicate items Checking Functionality
        var isDuplicate = false;
        val.forEach(li => {
            if (input.value === li.textContent.trim()) {
                isDuplicate = true;
            }
        });

        // Items Edit, Delete and Error Condition
        if (editBtn.textContent === 'Edit') {
            editBtn.textContent = 'Update';
            input.type = 'search';
            input.value = item.innerText;
            item.replaceWith(input);

        }
        else if (editBtn.textContent === 'Update') {
            if (isDuplicate) {
                popup.style.display = 'block';
                popupError.innerText = 'Dublicate List Error!';
                return;

            }
            else if (input.value.trim() !== "") {
                item.innerText = input.value;
                editBtn.textContent = 'Edit'
                popup.style.display = 'none';
                return input.replaceWith(item);

            } else {
                popup.style.display = 'block';
                popupError.innerText = 'Empty Field Error!';
            }
        }
    });
});

// Custom Theme Color Changing Functionality
let theme = document.getElementById("theme");
let colorBox = document.getElementById("fieldset");
theme.addEventListener('click', function () {
    let newColor = theme.value;
    let color = document.getElementById("fieldset");
    colorBox.style.backgroundColor = newColor;
    console.log("Theme changed to:", newColor);
});
