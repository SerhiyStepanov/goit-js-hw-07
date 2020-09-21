const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);
const spanEl = document.querySelector('#text');
console.log(spanEl);

const refs = {
  inputEl: document.querySelector('#font-size-control'),
  spanEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', onInputRange);

function onInputRange(event) {
  // console.log(event.currentTarget.value);
}
