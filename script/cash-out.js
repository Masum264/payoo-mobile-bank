document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const pin = document.getElementById('pin-number-cashout').value;
    const convertedPin = parseInt(pin);

    const balance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(balance);

    const cashoutBalance = document.getElementById('amount-cashout').value;
    const convertedCashoutBalance = parseFloat(cashoutBalance);

    if(convertedPin === 1234){
        const sum = convertedBalance - convertedCashoutBalance;
        document.getElementById('main-balance').innerText = sum;
    }
})