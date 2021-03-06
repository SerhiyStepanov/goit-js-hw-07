const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const outputEl = document.querySelector('#name-output');
console.log(outputEl);

const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  // console.log(event.currentTarget.value);
  if (event.currentTarget.value !== '') {
    refs.outputEl.textContent = event.currentTarget.value;
  } else {
    refs.outputEl.textContent = 'незнакомец';
  }
  return;
}
