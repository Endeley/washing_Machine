const menus = document.querySelectorAll('.marker');
const timer = document.querySelector('.time');
const temperatur = document.querySelectorAll('.temperature');
const termo = document.getElementById('termometer');
const nobe = document.querySelector('.nob-container');
const nobeBtn = document.querySelector('.nobe');
const door = document.querySelector('.cover');
const buttons = document.querySelectorAll('.btn');
const spin = document.getElementById('spin');
const timeSpan = document.querySelectorAll('timespan');

const washTime = ['30m', '45m', '25m', '1:48m', '60m', '35m', '10m', '1hr', '20m', '50m', '1:15m', '1:30m', '48m', '33m', '40m', '1:20m', '1:40', '1:45m', '1:18m', '1:11m', '28m', '1:05m', '30m', '45m', '25m', '1:48m', '60m', '35m', '10m'];

console.log(washTime.length);

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.currentTarget.id === 'power') {
      nobe.classList.add('active1');
      door.classList.add('active1');
      door.classList.remove('spin');
      nobe.classList.remove('spin');
      door.classList.remove('active');
      door.classList.remove('pausestate');
      nobe.classList.remove('active');
      nobe.classList.remove('pausestate');
    } else if (e.currentTarget.id === 'pause') {
      nobe.classList.add('pausestate');
      door.classList.add('pausestate');
      door.classList.remove('spin');
      nobe.classList.remove('spin');
      door.classList.remove('active1');
      door.classList.remove('active');
      nobe.classList.remove('active1');
      nobe.classList.remove('active');
    } else if (e.currentTarget.id === 'start') {
      door.classList.remove('active1');
      door.classList.remove('pausestate');
      door.classList.remove('spin');
      nobe.classList.remove('spin');
      nobe.classList.remove('active1');
      nobe.classList.remove('pausestate');
      door.classList.add('active');
      nobe.classList.add('active');
    } else if (e.currentTarget.id === 'spin') {
      door.classList.remove('active1');
      door.classList.remove('pausestate');
      door.classList.add('spin');
      nobe.classList.add('spin');
      nobe.classList.remove('active1');
      nobe.classList.remove('pausestate');
      door.classList.remove('active');
      nobe.classList.remove('active');
    }
  });
});

nobeBtn.addEventListener('click', select);

let currentMenusIndex = -1;

function select() {
  if (currentMenusIndex >= 0) {
    menus[currentMenusIndex].classList.remove('green');
  }

  currentMenusIndex = (currentMenusIndex + 1) % menus.length;
  timer.innerText = washTime[currentMenusIndex];
  menus[currentMenusIndex].classList.add('green');

  // Call spinTimer with the selected temperature span number
  selectedTemperatureSpan = parseInt(temperatur[temperaturIndex]);
  spinTimer(selectedTemperatureSpan);
}

let temperaturIndex = -1;
const animationSpeeds = [
  '10m',
  '2s',
  '3s',
  '4s',
  '5s', // Add more speeds as needed
  // ...
];

function spinCircle(spinningTime) {
  let currentTime = 0;
  const interval = 1000; // 1 second interval

  const animationSpeed = animationSpeeds[spinningTime]; // Get the corresponding speed

  const spinInterval = setInterval(() => {
    currentTime += interval / 1000; // Convert milliseconds to seconds

    if (currentTime >= spinningTime) {
      clearInterval(spinInterval); // Stop spinning after the specified time
      // Add any additional logic for when spinning is complete
    }

    // Update UI to show current spinning time (optional)
    // For example, you can display a countdown timer
    // UpdateUI(currentTime);
    console.log('Spinning... Current Time:', currentTime); // Added for demonstration
  }, interval);

  // Apply the animation speed to the spinning elements
  const spinningElements = document.querySelectorAll('.spintimer');
  spinningElements.forEach((element) => {
    element.style.transitionDuration = animationSpeed;
  });
}

function spinTimer(selectedTemperatureSpan) {
  termo.addEventListener('click', () => {
    if (temperaturIndex >= 0) {
      temperatur[temperaturIndex].classList.remove('spintimer');
    }
    temperaturIndex = (temperaturIndex + 1) % temperatur.length;
    temperatur[temperaturIndex].classList.add('spintimer');

    // Calculate the spinning time based on the selected temperature span
    let spinningTime = selectedTemperatureSpan * 10;
    selectedTemperatureSpan = 5; // Adjust multiplier as needed

    // Update your spinning logic with the new spinningTime value
    // For example:
    spinCircle(spinningTime);
  });
}
spinTimer();
