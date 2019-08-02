import count from './Count';
console.log('from index.js');
function handleClick() {
  alert('clicked');
  const x = count(3, 15);
  console.log('x:' + x);
}
const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', handleClick);
