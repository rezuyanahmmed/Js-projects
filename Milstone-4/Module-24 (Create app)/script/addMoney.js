document.getElementById('add-money-btn').addEventListener('click', function () {
  //bank account get
  const bankAccount = getValueFromInput('add-money-bank');
  if (bankAccount == 'Select Bank') {
    alert('please selecet e bank')
    return;
  }

  //get bank account number
  const accno = getValueFromInput('add-money-number');
  if (accno.length != 11) {
    alert('invalid account number')
    return;
  }

  //get ammount
  const ammount = getValueFromInput('add-money-ammount');
  const currentBalance = getBalance()
  const newBalance = currentBalance + Number(ammount)
  
  //pin
  const pin = getValueFromInput('add-money-pin');
  if (pin == '1234') {
    alert(`Money added successfully from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);
  }
  else {
    alert('Invalid pin');
    return;
  }

})