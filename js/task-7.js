const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);
const span = document.querySelector('#text');
console.log(span);

const refs = {
  inputEl: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', onInputRange);

function onInputRange(event) {
  console.log(Number(event.currentTarget.value));
  refs.span.style.fontSize = Number.parseInt(`${event.currentTarget.valuepx}`);
}
