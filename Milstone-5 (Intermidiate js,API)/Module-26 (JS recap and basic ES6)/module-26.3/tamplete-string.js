// 26-3 Template string, multiline string, dynamic string

// multi line string lekhar jonno  ei ` ` ei baktik namok simble ta use korbo...
//use korbo dolar cinhor pore seceond bracket diye...

const name = 'Rafi'

const aboutME = `my name is ${name}`
console.log(aboutME);

const giveMe = `give me money ${(5 + 10) * 5 + 200}`; //alada alada variable na niye amra direct ei bektik er vitorei amra kaj korte pari...
console.log(giveMe);

//--------------------------------------------------------------------
function getCrad(name, descrition, price) {
  const div = `
      <div class="card">
      <h2>${name.toUpperCase()}</h2>
      <p>${descrition}</p>
      </div>

  `;
  console.log(div);

}

getCrad('Samsung', 'this is my name');
