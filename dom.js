// const body = document.body;
// console.log(body);
// console.dir(body);
// body.innerHTML = '<h1>This is a body content</h1>';
// body.style.backgroundColor = 'red';
// body.style.marginLeft = '5rem';

// body.classList.add('bg-red', 'ml-20', 'text-2xl');
// body.classList.remove('bg-red');
// body.classList.toggle('bg-red');

// const footer = document.querySelector('footer');
// footer.innerHTML = 'This is the footer. Copyright 2026';

// const div = document.querySelector('div');
// div.innerHTML = 'This is a div inside the header';
// const secondDiv = document.querySelector('.main-content');
// secondDiv.innerHTML = 'This is the main content';

// const divList = document.querySelectorAll('div');
// console.log(divList);
// divList[1].style.color = 'yellow';

// // if id not found ==> null
// const header = document.getElementById('header');
// console.log(header);

// const a = document.getElementsByClassName('main-content');
// const b = document.getElementsByName('test');
// const c = document.getElementsByTagName('div');

// const newAside = document.createElement('aside');
// newAside.innerHTML = `
//   <div>
//     <h1>Main Sidebar</h1>
//   </div>
// `;
// console.log(newAside);

// append, prepend, before, after
// document.body.append(newAside);
// document.body.prepend(newAside);
// document.body.before(newAside);
// document.body.after(newAside);

// const header = document.getElementById('main-header');
// header.after(newAside);

// const div = document.querySelector('.main-content');
// div.before(newAside);

// insertAdjacentHTML: beforebegin, beforeend, afterbegin, afterend
// document.body.insertAdjacentHTML(
//   'beforebegin',
//   `
//   <div>
//     <h1>Main Sidebar</h1>
//   </div>
// `
// );

// document.body.insertAdjacentElement('afterbegin', newAside);
// document.body.insertAdjacentElement('beforeend', newAside);

// const navEl = document.querySelector('nav');
// navEl.remove();

// BROWSER EVENT eg. click, submit, change, dblclick etc...
// EVENT LISTENER
// 1. html attributes
// 2. object property
// 3. *** add event listener

// Event Listener 2.
// const btn = document.querySelector('button');
// console.log(btn);
// btn.onclick = function () {
//   alert('Clickkkkkkeddd');
// };

// Event Listener 3.
// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   alert('CICKED');
// });

// const inputEl = document.getElementById('price');

// const p = document.createElement('p');
// p.innerHTML = 'Invalid price: price must be a number and greater than zero';
// p.style.color = 'red';

// input.addEventListener('input', function () {
//   const userInput = input.value.trim();

//   // skip validation when field is empty
//   if (userInput === '') {
//     p.remove();
//     return;
//   }

//   const price = Number(userInput);
//   // isNaN('') === false because Number('') === 0, so we check after trim above
//   const isValid = !isNaN(price) && price > 0;

//   if (isValid) {
//     p.remove();
//   } else {
//     input.after(p);
//   }
// });

// const products = [
//   {
//     id: 1,
//     name: 'Coke',
//     price: 20
//   },
//   {
//     id: 2,
//     name: 'Pepsi',
//     price: 18
//   }
// ];

// products.map((product) => {});

// const inputEl = document.getElementById('price');
// inputEl.addEventListener('input', function () {
//   console.log(this.value);
// }); // this keyword

// inputEl.addEventListener('input', () => {
//   console.log(this);
// }); // this keyword

// EVENT OBJECT
// inputEl.addEventListener('input', function (event) {
//   console.log(event);
// });

// const callback = function (a) {
//   console.log(a.target);
// };

// const btnEl = document.querySelector('button');
// btnEl.addEventListener('', callback);
// USER Click button ==> btnEl called: callback({ target, data, type, ... })

// const formEl = document.querySelector('form');
// formEl.addEventListener('submit', function (event) {
//   event.preventDefault();
// });

const anchorEl = document.querySelector('a');
anchorEl.addEventListener('click', function (event) {
  event.preventDefault();
  const isConfirm = confirm('R U sure ?');
  if (isConfirm) {
    location.href = 'https://instagram.com';
  }
});
