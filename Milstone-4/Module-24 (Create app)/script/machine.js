console.log('machine added');
// machine id ->  input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(value);
  return value;
}

// machine -> balance
function getBalance() {
  const balanceElement = document.getElementById('balance');
  const balance = balanceElement.innerText;
  console.log('current balance', Number(balance));
  return Number(balance);
}

// machine value -> set balance
function setBalance(value) {
  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = value;
}

//machine id > hide all > show id
function showOnly(id) {
  const addMoney = document.getElementById('add-money');
  const cashout = document.getElementById('cashout');
  // console.log(`add money- ${addMoney}, cashout-${cashout}`);

  //sobay k hide kore daw
  addMoney.classList.add('hidden');
  cashout.classList.add('hidden');

  //id wala element k show koro
  const seleceted = document.getElementById(id);
  seleceted.classList.remove('hidden');

}