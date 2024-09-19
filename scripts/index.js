// Задание
// Создайте страницу, на которой расположены круги и
// специальные кнопки рядом для увеличения и уменьшения их
// количества. При нажатии на кнопки, количество кругов
// меняется и записывается в cookies. При запуске страницы
// устанавливается столько кругов, сколько указано в cookies. Если
// страница запускается впервые или cookies были очищены, то по
// умолчанию на ней должно быть 3 круга.

const circleContainer = document.getElementById('circle-container');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');

let circleCount = parseInt(getCookie('circleCount')) || 3;

function createCircle() {
  circleContainer.innerHTML = '';
  for (let i = 0; i < circleCount; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circleContainer.appendChild(circle);
  }
  document.cookie = `circleCount=${circleCount}`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

createCircle();

increaseBtn.addEventListener('click', () => {
  circleCount++;
  createCircle();
});

decreaseBtn.addEventListener('click', () => {
  if (circleCount > 1) {
    circleCount--;
    createCircle();
  }
});