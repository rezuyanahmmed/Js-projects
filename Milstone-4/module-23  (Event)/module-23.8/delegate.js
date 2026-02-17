const items = document.getElementsByClassName('item');
for(const item of items){
  item.addEventListener('click', function(event){
  event.target.parentNode.removeChild(event.target);
    
  })
  
}

