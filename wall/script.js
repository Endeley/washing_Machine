const menuList = document.querySelectorAll('li');
const nobe = document.querySelector('.nobe');
const counter = document.querySelector('.counter');

const washTime = ['30m', '45m', '25m', '1:48m', '60m', '35m', '10m', '1hr', '20m', '50m', '1:15m', '1:30m', '48m', '33m', '40m', '1:20m', '1:40', '1:45m', '1:18m', '1:11m', '28m', '1:05m'];

let currentMenusIndex = -1;

nobe.addEventListener('click', select);
function select() {
  if (currentMenusIndex >= 0) {
    menuList[currentMenusIndex].classList.remove('change');
  }

  currentMenusIndex = (currentMenusIndex + 1) % menuList.length;
  counter.innerText = washTime[currentMenusIndex];

  menuList[currentMenusIndex].classList.add('change');
  const rotationAngle = washTime[currentMenusIndex].includes(':') ? 180 : 90;
  nobe.style.transform = `rotate(${rotationAngle}deg)`;
  if (rotationAngle === 180) {
    nobe.classList.add('change');
  } else {
    nobe.classList.add('change');
  }
  const animationSpeed = rotationAngle === 180 ? '2s' : '1ms'; // Adjust speed as needed

  nobe.style.animation = `rotate linear infinite ${animationSpeed}`;
}
