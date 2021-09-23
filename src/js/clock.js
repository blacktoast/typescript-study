const clock = document.querySelector('.clock');

function getDate() {
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, '0');
  let minute = String(date.getMinutes()).padStart(2, '0');
  let second = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minute}:${second}`;
}

getDate();
setInterval(getDate, 1000);
