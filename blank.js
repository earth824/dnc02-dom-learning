const rootEl = document.getElementById('root');

const formEl = document.createElement('form'); // <form></form>
const emailInputEl = document.createElement('input'); // <input />
const passwordInputEl = document.createElement('input'); // <input />
const btnEl = document.createElement('button'); // <button></button>
btnEl.innerHTML = 'Log in'; // <button>Log in</button>

formEl.append(emailInputEl); // <form><input /></form>
formEl.append(passwordInputEl); // <form><input /><input /></form>
formEl.append(btnEl); // <form><input /><input /><button>Log in</button></form>

rootEl.append(formEl);

formEl.addEventListener('submit', async function (event) {
  event.preventDefault();
  // fetch ==> email, password
  const res = await fetch('/login', {
    method: 'post',
    body: JSON.stringify({
      email: emailInputEl.value,
      password: passwordInputEl.value
    })
  });

  // FAIL CONTENT
  const pEl = document.createElement('p');
  pEl.innerHTML = 'Invalid email or password';

  // location.href = "/success.html"
});

const root = document.getElementById('root');
const jRoot = $('#root');

function App() {
  return (
    <div>
      <header></header>
      <p>Hello</p>
    </div>
  );
}

App();
