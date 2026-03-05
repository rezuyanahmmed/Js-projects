const loadLeassons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLeasson(json.data));
};

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById('word-container');
  // wordContainer.innerHTML = "";

  words.forEach((word) => {
    console.log(word);
    const card = document.createElement('div');
    card.innerHTML = `
    
    `

  });

};



const displayLeasson = (leassons) => {
  //1: get the container and empty
  const levelContainer = document.getElementById('level-container');
  levelContainer.innerHTML = "";

  //2:get into every leassonn
  for (let leasson of leassons) {
    console.log(leasson);

    //3:create element
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
    <button onclick="loadLevelWord(${leasson.level_no})" class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i>Leasson - ${leasson.level_no}<button>
    `;

    // 4: append button
    levelContainer.append(btnDiv);

  }

}

loadLeassons();