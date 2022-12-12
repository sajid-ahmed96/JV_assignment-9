var main = document.getElementById('main')
var inp = document.getElementById('inp')

function add() {
    if (inp.value == "") {
        alert("Please enter your to do work")
    }
    else {
        //create list item
        var li = document.createElement("LI")
        var liText = document.createTextNode(inp.value)
        li.appendChild(liText)
        li.setAttribute("class", "styleLi")
        main.appendChild(li)
        //list item end
        //create edit button
        var editBtn = document.createElement("BUTTON")
        var editBtnText = document.createTextNode("Edit")
        editBtn.appendChild(editBtnText)
        editBtn.setAttribute("onclick", "editToDo(this)")
        editBtn.setAttribute("class", "styleBtn")
        li.appendChild(editBtn)
        //edit button end
        //create delete button
        var delBtn = document.createElement("BUTTON")
        var deltBtnText = document.createTextNode("Delete")
        delBtn.appendChild(deltBtnText)
        delBtn.setAttribute("onclick", "deleteToDo(this)")
        delBtn.setAttribute("class", "styleBtn")
        li.appendChild(delBtn)
        //delete button end
        inp.value = ""
    }
}

function editToDo(element) {
    var newValue = prompt("Please enter your changes", element.parentNode.firstChild.nodeValue)
    element.parentNode.firstChild.nodeValue = newValue
}

function deleteToDo(element) {
    element.parentNode.remove()
}

function DelAll() {
    main.innerHTML = ""
}