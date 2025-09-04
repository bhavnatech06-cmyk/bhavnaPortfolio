
let balance = 0;
let income = 0;
let expense = 0;

document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('expense-name');
    const amountInput = document.getElementById('expense-amount');

    const name = nameInput.value;
    const amount = parseFloat(amountInput.value);

    if (amount > 0) {
        addIncome(name, amount);
    } else {
        addExpense(name, -amount);
    }

    nameInput.value = '';
    amountInput.value = '';
});

function addIncome(name, amount) {
    income += amount;
    balance += amount;
    updateDisplay();
    addTransaction(name, amount, 'income');
}

function addExpense(name, amount) {
    expense += amount;
    balance -= amount;
    updateDisplay();
    addTransaction(name, -amount, 'expense');
}

function addTransaction(name, amount, type) {
    const table = document.getElementById('expense-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const amountCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2);

    nameCell.textContent = name;
    amountCell.textContent = `${type === 'income' ? '+' : '-'}₹${Math.abs(amount).toFixed(2)}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        if (type === 'income') {
            income -= amount;
            balance -= amount;
        } else {
            expense -= amount;
            balance += amount;
        }
        updateDisplay();
        table.deleteRow(newRow.rowIndex - 1);
    });

    actionCell.appendChild(deleteButton);
}

function updateDisplay() {
    document.getElementById('balance').textContent = `₹${balance.toFixed(2)}`;
    document.getElementById('addIncome').textContent = `+₹${income.toFixed(2)}`;
    document.getElementById('addExpense').textContent = `-₹${expense.toFixed(2)}`;
}