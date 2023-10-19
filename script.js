const input = document.querySelector('input');
const items = document.querySelector('.items');

input.addEventListener ('keydown', function(event){
  const itemText = input.value;

  const newItem = document.createElement('div');
  newItem.textContent = itemText;

  if(event.key == 'Enter'){
    items.append(newItem);
    input.value= '';
    }

  newItem.addEventListener('click', function() {  
    newItem.classList.toggle('done');     
    })
})




