// 37 minutes
window.addEventListener("load", solve);

function solve () {
    const addBtn = document.getElementById("add-btn");
    const taskList = document.getElementById("task-list");
    const doneList = document.getElementById("done-list");

    addBtn.addEventListener("click", function () {
        const place = document.getElementById("place").value.trim();
        const action = document.getElementById("action").value.trim();
        const person = document.getElementById("person").value.trim();

        if (place !== "" && action !== "" && person !== "") {
            const li = document.createElement("li");
            li.classList.add("clean-task");
            let article = document.createElement("article");
            let pPlace = document.createElement("p");
            pPlace.textContent = `Place:${place}`;
            let pAction = document.createElement("p");
            pAction.textContent = `Action:${action}`;
            let pPerson = document.createElement("p");
            pPerson.textContent = `Person:${person}`;
            article.appendChild(pPlace);
            article.appendChild(pAction);
            article.appendChild(pPerson);
            let divButtons = document.createElement("div");
            divButtons.classList.add("buttons");
            let editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.classList.add("edit");
            let doneBtn = document.createElement("button");
            doneBtn.textContent = "Done";
            doneBtn.classList.add("done");
            divButtons.appendChild(editBtn);
            divButtons.appendChild(doneBtn);
            li.appendChild(article);
            li.appendChild(divButtons);
            taskList.appendChild(li);
            document.getElementById("place").value = "";
            document.getElementById("action").value = "";
            document.getElementById("person").value = "";

            editBtn.addEventListener("click", function () {
                const [editPlace, editAction, editPerson] = [place, action, person];
                document.getElementById("place").value = editPlace;
                document.getElementById("action").value = editAction;
                document.getElementById("person").value = editPerson;
                li.remove();
            });

            doneBtn.addEventListener("click", function () {
                li.removeChild(divButtons);
                let deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.classList.add("delete");
                li.appendChild(deleteBtn);
                const newLi = li.cloneNode(true);
                newLi.classList = '';
                li.remove();
                doneList.appendChild(newLi);
            });

            document.addEventListener("click", function (event) {
                if (event.target.classList.contains("delete")) {
                    event.target.parentElement.parentElement.remove()
                }
            });
            
    };
});
}
