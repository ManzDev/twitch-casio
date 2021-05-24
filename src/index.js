const WEEKDAY = ["5V", "MO", "TV", "WE", "TH", "FR", "5A"];

const dom = {
  day: document.querySelector(".day"),
  weekday: document.querySelector(".weekday"),
  hours: document.querySelector(".hours"),
  minutes: document.querySelector(".minutes"),
  seconds: document.querySelector(".seconds"),
  innerCenter: document.querySelector(".inner-center")
};

const buttons = {
  leftTop: document.querySelector(".button-notch.left.top + .button"),
  leftBottom: document.querySelector(".button-notch.left.bottom + .button"),
  rightBottom: document.querySelector(".button-notch.right.bottom + .button")
};

buttons.leftTop.addEventListener("mousedown", () => {
  dom.innerCenter.classList.add("on");
  document.body.classList.add("off");
});

buttons.leftTop.addEventListener("mouseup", () => {
  dom.innerCenter.classList.remove("on");
  document.body.classList.remove("off");
});

const updateClock = () => {
  const date = new Date();
  dom.day.textContent = date.getDate();
  dom.weekday.textContent = WEEKDAY[date.getDay()];
  dom.hours.textContent = String(date.getHours()).padStart(2, "0");
  dom.minutes.textContent = String(date.getMinutes()).padStart(2, "0");
  dom.seconds.textContent = String(date.getSeconds()).padStart(2, "0");
};

setInterval(updateClock, 1000);
