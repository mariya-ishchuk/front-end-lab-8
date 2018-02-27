var rootNode = document.getElementById("root");

function event(event) {
    if (event.currentTarget.nextElementSibling.style.display === "none") {
        event.currentTarget.nextElementSibling.style.display = "block";
        event.currentTarget.getElementsByTagName('i')[0].innerHTML = "folder_open";
        event.currentTarget.getElementsByTagName('i')[0].className = "material-icons folder_open";
    } else {
        event.currentTarget.nextElementSibling.style.display = "none";
        event.currentTarget.getElementsByTagName('i')[0].innerHTML = "folder";
        event.currentTarget.getElementsByTagName('i')[0].className = "material-icons folder";
    }
}

function buildTree(structure, parentUl, isFolded) {
    for (var i = 0; i < structure.length; i++) {
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        var p = document.createElement("p");
        p.innerHTML = structure[i].title;
        var icon = document.createElement("i");
        if (structure[i].folder) {
            li.className = "folder";
            li.addEventListener('click', event)
            icon.innerHTML = "folder";
            icon.className = "material-icons folder";
        } else {
            icon.innerHTML = "insert_drive_file";
            icon.className = "material-icons file";
        }
        p.appendChild(icon);
        li.appendChild(p);
        ul.appendChild(li);

        if (structure[i].children) {
            buildTree(structure[i].children, ul.appendChild(document.createElement("li")), true)
        } else if (structure[i].folder) {
            var empty = document.createElement("li");
            empty.innerHTML = "Folder is empty";
            empty.className = "empty";
            ul.appendChild(empty);
            empty.style.display = "none";
        }

        parentUl.appendChild(ul);
        isFolded && (parentUl.style.display = "none");
    }
}

buildTree(structure, rootNode);