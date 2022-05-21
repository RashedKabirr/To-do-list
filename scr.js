const myform = document.querySelector('.container');
const mytext = document.querySelector('.things');
const mybtn = document.querySelector('.sub');
const myclr = document.querySelector('.clr');
const user = document.querySelector('.user');
const clr = document.querySelector('.clr');

mybtn.addEventListener('click', todo);
user.addEventListener('click', dltt);

function todo(event){
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement("li");
    newTodo.classList.add('newTodo');
    newTodo.innerText = mytext.value;
    todoDiv.appendChild(newTodo);
    const clrbtn = document.createElement("button");
    clrbtn.classList.add('clrbtn');
    clrbtn.innerText = 'Clear';
    todoDiv.appendChild(clrbtn);
    user.appendChild(todoDiv);
mytext.value = '';


}

function dltt(e){
    const item = e.target;
    if(item.classList[0] === 'clrbtn'){
        const tedo = item.parentElement;
        tedo.remove();
    }
}

