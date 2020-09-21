const navCounter = document.querySelector('#counter');
console.log(navCounter);

const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);
const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);

const valueEl = document.querySelector('#value');
console.log(valueEl);

const counter = {
  value: 0,
  decrement() {
    counter.value -= 1;
  },
  increment() {
    counter.value += 1;
  },
};

btnDecrement.addEventListener('click', () => {
  counter.decrement();
  valueEl.textContent = counter.value;
});

btnIncrement.addEventListener('click', () => {
  counter.increment();
  valueEl.textContent = counter.value;
});
