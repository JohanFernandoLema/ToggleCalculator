
const calculator = document.getElementById('calculator');
const toggle = document.getElementById('toggle');
toggle.onclick = function()
{
    toggle.classList.toggle('active');
    calculator.classList.toggle('active');

}

function checkingForInput()
{
    let totalNumber = document.getElementById("display").value;
    let length = totalNumber.length;
    if(length > 20 )
    {
        alert("Max 20 numbers");
    }
    else
    {
        display.value = eval(display.value)
    }
    
}

