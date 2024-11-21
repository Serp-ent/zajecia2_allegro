list = document.querySelector('ul');
input = document.querySelector('input');
button = document.querySelector('button');

button.addEventListener('click', () => {
    let listItem = document.createElement("li");
    listItem.innerText = input.value;
    button.value = '';

    list.appendChild(listItem);
});