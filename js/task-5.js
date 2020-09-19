const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};

const inputEl = document.querySelector('#name-input');
console.dir(refs.inputEl);
const outputEl = document.querySelector('#name-output');
console.dir(refs.outputEl);

refs.inputEl.addEventListener('input', oninputChange);

function oninputChange(event) {
  // console.log(event.currentTarget.value);

  refs.outputEl.textContent = event.currentTarget.value;
}
