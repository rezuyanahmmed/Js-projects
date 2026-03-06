const createElement = (arr) => {
  const htmlElements = arr.map((el) => `<span class="btn">${el}</span>`);
  return htmlElements.join(" ");
};



const loadLeassons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLeasson(json.data));
};


// jei button e click korbo shei buttn kaj active howar function
const removeActive = () => {
  const leassonButtons = document.querySelectorAll('.leasson-btn');
  // console.log(leassonButtons);
  leassonButtons.forEach((btn) => btn.classList.remove('active'));

};

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => {

      removeActive();
      const clickBtn = document.getElementById(`leasson-btn-${id}`);
      // console.log(clickBtn);
      clickBtn.classList.add('active');

      displayLevelWord(data.data);
    });
};

// info er function
const loadworddetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  // console.log(url);
  const res = await fetch(url);
  const details = await res.json();
  displayWordDetails(details.data);
};

// {
//     "word": "Linger",
//     "meaning": "থেমে থাকা / বিলম্ব করা",
//     "pronunciation": "লিঙ্গার",
//     "level": 2,
//     "sentence": "She lingered at the door, unwilling to leave.",
//     "points": 2,
//     "partsOfSpeech": "verb",
//     "synonyms": [
//         "stay",
//         "remain",
//         "delay"
//     ],
//     "id": 12
// }




const displayWordDetails = (word) => {
  console.log(word);
  const detailsBox = document.getElementById('details-container');
  detailsBox.innerHTML = `
  <div class="">
          <h2 class="text-[26px] font-semibold">${word.word} (<i class="fa-solid fa-microphone-lines"></i>:${word.pronunciation})</h2>
        </div>
        <div class="space-y-1 pt-5">
          <p class="font-semibold">Meaning</p>
          <p class="font-bangla">${word.meaning}</p>
        </div>

        <div class="space-y-1 pt-5">
          <p class="font-semibold">Example</p>
          <p class="">${word.sentence}</p>
        </div>

        <div class="space-y-2 pt-6">
          <h2 class="font-semibold font-bangla">সমার্থক শব্দ গুলো</h2>
          
          <div class="space-y-2 pt-6">${createElement(word.synonyms)}</div>

        </div>

        <div class="pt-6">
          <button class="btn btn-primary">Complete Learning</button>
        </div>

  `;
  document.getElementById('word_modal').showModal();

};

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById('word-container');
  wordContainer.innerHTML = "";

  if (words.length == 0) {
    wordContainer.innerHTML = `
    <div class="text-center col-span-full space-y-2">
      <img class="mx-auto" src="./assets/alert-error.png" alt="">
      <p class="font-bangla text-[15px] text-[#524f4cf3]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
      <h2 class="font-bangla text-[30px]">নেক্সট Lesson এ যান</h2>
    </div>   
    `
      ;
    return;
  }


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
      <h2 class="font-bold text-2xl">${word.word ? word.word : "Shobdo pawa jayni"}</h2>
      <p class="font-semibold text-[13px] pt-3">Meaning /Pronounciation</p>
      <div class="text-[18px] font-mediumfont-bangla pt-5">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি "} / ${word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায়নি"}"</div>
      <div class="flex justify-between items-center">
        <button onclick="loadworddetail(${word.id})" class="btn mt-10 bg-[#1a90ff17] hover:bg-[#1A91FF]"><i class="fa-solid fa-circle-info"></i></button>
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
    <button id="leasson-btn-${leasson.level_no}" onclick="loadLevelWord(${leasson.level_no})" class="btn btn-outline btn-primary leasson-btn">
    <i class="fa-solid fa-book-open"></i>Leasson - ${leasson.level_no}<button>
    `;

    // 4: append button
    levelContainer.append(btnDiv);

  }

}

loadLeassons();