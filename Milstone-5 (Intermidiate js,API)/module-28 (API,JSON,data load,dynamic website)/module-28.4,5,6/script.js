const loadpost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      displayPost(data);
    });
};

// {
//     "userId": 4,
//     "id": 32,
//     "title": "doloremque illum aliquid sunt",
//     "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
// }


const displayPost = (posts) => {
  //1:  get the container and empty the container
  const postContainer = document.getElementById('post-container');
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    //2:create element
    const postCard = document.createElement('div');
    postCard.innerHTML = `<div class="post-card">
      <h3>${post.userId}</h3>
      <h4>${post.id}</h4>
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </div>`

    //3:add to the container
    postContainer.append(postCard);

  });
};

// const displayPost = (posts) => {
//   // 1:get the container
//   const postContainer = document.getElementById('post-container');
//   console.log(postContainer);
//   postContainer.innerHTML = ""; //repeat na korar jonno



// posts.forEach((post) => {
//   // console.log(post.title);
//   // 2: create html element

//   const li = document.createElement('li');
//   li.innerText = post.title;
//   // console.log(li);

//   //3: add li into container
//   postContainer.appendChild(li);
// });
// };