// const items = document.getElementsByClassName('item');
// for(const item of items){
//   item.addEventListener('click', function(event){
//   event.target.parentNode.removeChild(event.target);
//   })
// }


document.getElementById('item-list').addEventListener('click', function(event){
  // console.log(event.target);
  event.target.parentNode.removeChild(event.target)
  
})  //eta holo parent mane ekhon new ekta item banala etate click korlew remove hobe...

// Add e new item
document.getElementById('btn-add-item').addEventListener('click', function(){
  // parent to be added
  const ol = document.getElementById('item-list')

  //new item
  const li = document.createElement('li');
  li.classList.add('item');
  li.innerText = 'Brand new item added'

  // add the item
  ol.appendChild(li);
  
})

