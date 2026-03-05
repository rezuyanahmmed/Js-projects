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
  wordContainer.innerHTML = "";


  // {
  //   "id": 82,
  //     "level": 1,
  //       "word": "Car",
  //         "meaning": "গাড়ি",
  //           "pronunciation": "কার"
  // }



  words.forEach((word) => {
    console.log(word);
    const card = document.createElement('div');
    card.innerHTML = `

     <div class="bg-white rounded-[10px] text-center shadow-sm py-4 px-4">
      <h2 class="font-bold text-2xl">${word.word}</h2>
      <p class="font-semibold text-[13px] pt-3">Meaning /Pronounciation</p>
      <div class="text-[18px] font-mediumfont-bangla pt-5">"${word.meaning} / ${word.pronunciation}"</div>
      <div class="flex justify-between items-center">
        <button class="btn mt-10 bg-[#1a90ff17] hover:bg-[#1A91FF]"><i class="fa-solid fa-circle-info"></i></button>
        <button class="btn mt-10 bg-[#1a90ff17] hover:bg-[#1A91FF]"><i class="fa-solid fa-volume-high"></i></button>
      </div>
    </div>
    `;
    wordContainer.append(card);

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