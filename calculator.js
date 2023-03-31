const background = document.getElementsByClassName('calculator');
const calculator = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function()
{
    toggle.classList.toggle('active');
    calculator.classList.toggle('active');
    background.classList.toggle('active');
}

