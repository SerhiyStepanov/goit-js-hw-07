const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

refs.input.addEventListener('input', onRange);
// refs.span.style.onRange = currentTarget;

function onRange(event) {
  //   console.log(event.currentTarget);
  refs.span.style.sizeControl = event.currentTarget;
}
