document.getElementById('add-money-btn').addEventListener('click', function(event){
     
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);

    const pinNumber = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pinNumber);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedManinBalance = parseFloat(mainBalance);

    if(convertedPin === 1234){
        const sum = convertedAmount + convertedManinBalance;
        document.getElementById('main-balance').innerText = sum;
    }
    else{
        alert("Invalid PIN number");
    }

})