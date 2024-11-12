function main() {
    let expenselist = document.querySelector("#expense-list");
    let totalamount = document.querySelector("#total-amount");
    let btn = document.querySelector("#btn");
    let total = 0; 

    btn.addEventListener("click", () => {
        let description = document.querySelector("#description").value;
        let amount = parseFloat(document.querySelector("#amount").value);

        if (description === "" || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid description and amount.");
            return;
        }

        let Li = document.createElement("li");
        Li.innerHTML = `${description}: ${amount.toFixed(2)}`;
        expenselist.appendChild(Li);

        total += amount;
        totalamount.innerHTML = `${total.toFixed(2)}`;

        document.querySelector("#description").value = "";
        document.querySelector("#amount").value = "";
    });
}

main();
