document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', handleForm)
  
  

});
//  create an event on the forms submit button,
//  description to be added on the ul list as li 

function handleForm(event){
  event.preventDefault()
  let task = document.getElementById('new-task-description').value;
  document.getElementById('create-task-form').reset();

  addTask(task);
  

}

function addTask(task){
  let priority = document.getElementById('priority');
  let red = priority.options[0].style.color="red";
  let yellow = priority.options[1].style.color="yellow";
  let green = priority.options[2].style.color="green";
  
  let tasks = document.getElementById('tasks');
  let nuTask= document.createElement('li');
  let deleteButton = document.createElement('button');
  deleteButton.innerText = "X";
  nuTask.innerText = `${task}  `; 
  nuTask.appendChild(deleteButton);
  

  tasks.appendChild(nuTask);

  deleteButton.addEventListener('click', function(){
   nuTask.remove();
  })
}