
function name() {
    let name = "Kit";
    console.log(name);
}
name()

function sum() {
    let num1 = document.getElementById('num1').value;
    let num1 = document.getElementById('num1').value;
    let result = num1 + num2;
    console.log(result);
}


function least(num1, num2, num3, num4, num5) {
    let num1 = document.getElementById(number('num1')).value;
    let num2 = document.getElementById(number('num2')).value;
    let num3 = document.getElementById(number('num3')).value;
    let num4 = document.getElementById(number('num4')).value;
    let num5 = document.getElementById(number('num5')).value;

    let output = Math.min(num1, num2, mum3, num4, num5);
    document.getElementById('results').innerText = output;
}


// Step 1: Get the info from the user
let input1 = document.getElementById('').value; //3
let input1 = document.getElementById('').value; //5

// Step 2: Do something with it
let result = AddTwoInputs(input1, input2);//8

//Step 3: Use the return value for something
let output = document.getElementById('');
output.innerHTML(result);

//Event Listener
document.getElementById('btn').addEventListener('click', function () {

});