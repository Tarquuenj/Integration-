async function fetchTransactions() {
    const response = await fetch('/api/transactions');
    const transactions = await response.json();
    console.log(transactions);
}

document.addEventListener('DOMContentLoaded', fetchTransactions);
