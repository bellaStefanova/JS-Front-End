// 34 minutes
window.addEventListener("load", solve);

function solve() {
    let expense;
    let amount;
    let date;
    let buttonAdd = document.getElementById("add-btn");
    let previewList = document.getElementById("preview-list");
    let expensesList = document.getElementById("expenses-list");
    let buttonDelete = document.getElementsByClassName("delete")[0];
    buttonAdd.addEventListener("click", function () {
        expense = document.getElementById("expense").value;
        amount = document.getElementById("amount").value;
        date = document.getElementById("date").value;

        if (expense && amount && date) {
            buttonAdd.disabled = true;
            document.getElementById("expense").value = "";
            document.getElementById("amount").value = "";
            document.getElementById("date").value = "";

            previewList.innerHTML = `<li class="expense-item">
            <article>
            <p>Type: ${expense}</p>
            <p>Amount: ${amount}$</p>
            <p>Date: ${date}</p>
            </article>
            <div class="buttons">
            <button class="btn edit">edit</button>
            <button class="btn ok">ok</button>
            </div>
            </li>`
        }


        let editBtn = document.getElementsByClassName("edit")[0];
        let okBtn = document.getElementsByClassName("ok")[0];
        if (editBtn) {
            editBtn.addEventListener("click", function () {
                buttonAdd.disabled = false;
                previewList.innerHTML = "";
                document.getElementById("expense").value = expense;
                document.getElementById("amount").value = amount;
                document.getElementById("date").value = date;
            });
        }

        if (okBtn) {
            okBtn.addEventListener("click", function () {
                buttonAdd.disabled = false;
                previewList.innerHTML = "";
                expensesList.innerHTML += `<li class="expense-item">
            <article>
            <p>Type: ${expense}</p>
            <p>Amount: ${amount}$</p>
            <p>Date: ${date}</p>
            </article>
            </li>`
            });
        }
    });

    buttonDelete.addEventListener("click", function () {
        location.reload();
    });
}