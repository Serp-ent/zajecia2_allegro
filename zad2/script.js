let counter = 0;

counterTag = document.querySelector(".counter");
counterTag.innerText = counter;

counterBtn = document.querySelector(".increase-counter");
counterBtn.addEventListener("click", () => {
  ++counter;
  counterTag.innerText = counter;
});

colorBtn = document.querySelector('.switch-color');
colorBtn.addEventListener('click', () => {
    const color = counterTag.style.color === 'red' ? 'black' : 'red';
    counterTag.style.color = color;
});
