document.getElementById('btn-update-title').addEventListener('click', function () {
  // console.log('ok');
  const pageTitleElement = document.getElementById('page-title');
  console.log(pageTitleElement);
  pageTitleElement.innerText = "Update the heading"
})

//---------another----------------------
document.getElementById('btn-login').addEventListener('click', function () {
  const userInfoEl = document.getElementById('user-info');
  userInfoEl.innerText = 'user logged in'
})


  // -------------------------------------------------------------
  // set event listener
  document.getElementById('btn-update').addEventListener('click', function () {
    console.log('update button clicked');
    //
    const nameInput = document.getElementById('input-name');
    console.log(nameInput);
    const name = nameInput.value;
    console.log('name', name);
    //
    const nameP = document.getElementById('name');
    nameP.innerText = name;

  });