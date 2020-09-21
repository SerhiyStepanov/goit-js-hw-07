const validationInput = document.querySelector('#validation-input');
console.log(validationInput);

const refs = {
  type: 'text',
  id: 'validation-input',
  datalength: 6,
  placeholder: 'Введи 6 символов',
};

validationInput.addEventListener('input', onValidInput);
validationInput.addEventListener('blur', onBlurInput);

function onValidInput(event) {
  console.log(event.currentTarget.value);
}

function onBlurInput(event) {
  if (
    event.currentTarget.value.length < refs.datalength ||
    event.currentTarget.value.length > refs.datalength
  ) {
    validationInput.classList.add('invalid');
  }
  if (event.currentTarget.value.length === refs.datalength) {
    validationInput.classList.replace('invalid', 'valid');
  }
  return validationInput;
}