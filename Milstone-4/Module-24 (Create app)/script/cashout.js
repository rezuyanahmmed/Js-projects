document.getElementById('cashout-btn').addEventListener('click', function () {
  //1- get the agent number and validet
  const cashoutNumberInput = document.getElementById('cashout-number');
  const cashoutNumber = cashoutNumberInput.value;
  console.log(cashoutNumber);

  //2- get the ammount
  const cashoutAmmountInput = document.getElementById('cashout-ammount');
  const cashoutAmmount = cashoutAmmountInput.value;
  console.log(cashoutAmmount);

  //3- get the current balance
  const balanceElement = document.getElementById('balance');
  const balance = balanceElement.innerText;
  console.log(balance);

  //4- calculate new balance
  const newBalance = Number(balance) - Number(cashoutAmmount);
  if (newBalance < 0) {
    alert('invalid ammount')
  }
  console.log('new balance is:', newBalance);

  //5- get the pin and verify
  //5.1 true:: show on alert > set balance
  //5.2 false:: show an eror alert > return
})