document.getElementById('cashout-btn').addEventListener('click', function () {
  //1- get the agent number and validet
  const cashoutNumber = getValueFromInput('cashout-number');
  if (cashoutNumber.length != 11) {
    alert('invalid number')
    return;
  }

  //2- get the ammount
  const cashoutAmmount = getValueFromInput('cashout-ammount')



  const currentBalance = getBalance();
  //4- calculate new balance
  const newBalance = currentBalance - Number(cashoutAmmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert('invalid pin')
    return;
  }

  //5- get the pin
  const pin = getValueFromInput('cashout-pin');
  if (pin === '1234') {
    alert('cashout successfull')
    setBalance(newBalance);
  } else {
    alert('invalid pin');
    return;
  }

});






//-----------------------------------------------------------------------------------------------

// document.getElementById('cashout-btn').addEventListener('click', function () {
//   //1- get the agent number and validet
//   const cashoutNumberInput = document.getElementById('cashout-number');
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   if (cashoutNumber.length != 11){
//     alert('invalid agent number')
//     return;
//   }

//     //2- get the ammount
//     const cashoutAmmountInput = document.getElementById('cashout-ammount');
//   const cashoutAmmount = cashoutAmmountInput.value;
//   console.log(cashoutAmmount);

//   //3- get the current balance
//   const balanceElement = document.getElementById('balance');
//   const balance = balanceElement.innerText;
//   console.log(balance);

//   //4- calculate new balance
//   const newBalance = Number(balance) - Number(cashoutAmmount);
//   if (newBalance < 0) {
//     alert('invalid ammount')
//     return;
//   }


//   //5- get the pin and verify
//   const cashoutPinInput = document.getElementById('cashout-pin');
//   const pin = cashoutPinInput.value;
//   if (pin === '1234') {
//     //5.1 true:: show on alert > set balance
//     alert('cashout successfull');
//     console.log('new balance is:', newBalance);
//     balanceElement.innerText = newBalance;
//   }
//   else {
//     //5.2 false:: show an eror alert > return
//     alert('invalid pin')
//     return;
//   }

// })