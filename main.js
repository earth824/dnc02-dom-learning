// console.log('HELLO WORLD');
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// // alert('Hellllllllloooooo');
// fetch('https://jsonplaceholdert.typico.com');

// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   // location.href = 'https://google.com';
//   location.assign('https://google.com');
// });

// OBJECT (1. property, key, field, attribute), (2. method, function)

// const platform = navigator.platform;
// console.log(platform);
// const userAgent = navigator.userAgent;
// console.log(userAgent);
// const geolocation = navigator.geolocation.getCurrentPosition((position) => {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   console.log(`Lat: ${lat}, Lon: ${lon}`);
// });
// console.log(geolocation);

// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   // history.forward();
//   // history.back();
//   history.go(-2)
// });

// console.log(screen.height);
// console.log(screen.width);
// console.log(screen.colorDepth);

const clickBtn = document.querySelector('#test');
setTimeout(() => {
  clickBtn.innerHTML = 'BlaBla';
  clickBtn.classList.add('bg-primary');
}, 5000);
