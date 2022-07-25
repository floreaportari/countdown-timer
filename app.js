const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const birthday = "2023-04-20";

function countdown() {
  const birthDayDate = new Date(birthday);
  const currentDate = new Date();

  const diffInMs = birthDayDate - currentDate;

  const daysLeft = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((diffInMs / 1000 / 60) % 60);
  const secondsLeft = Math.floor(diffInMs / 1000) % 60;

  days.textContent = daysLeft;
  hours.textContent = timeFormat(hoursLeft);
  minutes.textContent = timeFormat(minutesLeft);
  seconds.textContent = timeFormat(secondsLeft);
}
function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
