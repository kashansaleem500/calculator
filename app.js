let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}


function clr() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}

function mod() {
  display.value = display.value += '%';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch(err) {
    display.value = 'Error';
  }
}
