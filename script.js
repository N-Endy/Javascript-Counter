let number = document.querySelector('.number');
let lower = document.querySelector('.lower');
let add = document.querySelector('.add');
let btns = document.querySelectorAll('a');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.className === 'lower') {
            number.textContent--;
        } else {
            number.textContent++;
        }

        number.innerText > 0 ? number.style.color = 'green' : number.style.color = 'black';
        number.innerText == 0 ? lower.classList.add('disabled') : lower.classList.remove('disabled');
        number.innerText == 50 ? add.classList.add('disabled') : add.classList.remove('disabled');
    })
})