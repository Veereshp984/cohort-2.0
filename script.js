const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    if(input.value.trim() !== ''){
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
    }
});

addBtn.addEventListener('click', () => {
    if(input.value.trim() !== ''){
        const li = document.createElement('li');
        li.innerHTML = input.value + ' <button>Delete</button>';
        list.appendChild(li);
        input.value = '';

        li.querySelector('button').addEventListener('click', () => {
            li.remove();
        });
    }
});
