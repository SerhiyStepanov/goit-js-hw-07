const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};

const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const outputEl = document.querySelector('#name-output');
console.log(outputEl);

refs.inputEl.addEventListener('input', oninputChange);

function oninputChange(event) {
  console.dir(event.currentTarget.value);

  outputEl.textContent = event.currentTarget.value;
}
