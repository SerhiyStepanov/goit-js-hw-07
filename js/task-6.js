const validationInput = document.querySelector('#validation-input');
console.log(validationInput);

// const refs = {
//   type: 'text',
//   id: 'validation-input',
//   datalength: '6',
//   placeholder: 'Введи 6 символов',
// };

validationInput.addEventListener('input', onValidInput);
validationInput.addEventListener('blur', onBlurInput);

function onValidInput(event) {
  console.log(event.currentTarget.value);
}

function onBlurInput(event) {
  if (
    event.currentTarget.value.length !== Number(validationInput.dataset.length)
  ) {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  } else {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  }
  return validationInput;
}
