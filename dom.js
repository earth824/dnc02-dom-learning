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

const newAside = document.createElement('aside');
newAside.innerHTML = `
  <div>
    <h1>Main Sidebar</h1>
  </div>
`;
console.log(newAside);

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

const input = document.getElementById('price');

const p = document.createElement('p');
p.innerHTML = 'Invalid price: price must be a number and greater than zero';
p.style.color = 'red';

input.addEventListener('input', function () {
  // 1. READ input value
  const userInput = input.value;
  // console.log(input.value);
  // 2. validate input: must be a number and greater than zero
  const price = Number(userInput);
  const isNumeric = !isNaN(price); // '' ==> 0, '     ' ==> 0

  // 3. if validation failed, cretae new element with error message and then insert after input element
  if (!isNumeric || price <= 0) {
    input.after(p);
  } else {
    p.remove();
  }
});
