// Get the toggle switch element
var toggleSwitch = document.getElementById("toggleSwitch");

// Get calculator buttons
var calculatorButtons = document.querySelectorAll(".btn input[type='button']");

// Disable calculator by default
toggleSwitch.checked = false;
toggleCalculator(false);

// Function to toggle calculator functionality
function toggleCalculator(enabled) {
  calculatorButtons.forEach(function (button) {
    button.disabled = !enabled;
  });
}

// Event listener for the toggle switch
toggleSwitch.addEventListener("change", function () {
  toggleCalculator(this.checked);
});

function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }
