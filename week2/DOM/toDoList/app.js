function addToDo(){
    const inputEl = document.getElementById('input');
    const value = inputEl.value;


    const newLiEl = document.createElement('li');
    newLiEl.className = 'items';

     const textNode = document.createTextNode(value);

     const deleteBtn = document.createElement('button');
     deleteBtn.innerText = 'Task Done';
     deleteBtn.onclick = deleteToDo;

     newLiEl.appendChild(textNode);
     newLiEl.appendChild(deleteBtn);

     document.getElementById('todo-list').appendChild(newLiEl);
     
     inputEl.value='';



}

function deleteToDo(event){
    const buttonClicked = event.target;
    const liToDelete = buttonClicked.parentElement;
    liToDelete.remove(); 
   

}














