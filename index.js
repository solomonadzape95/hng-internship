const bannerPic = document.getElementById("banner-pic");
const timeDisplayEl = document.getElementById("time");
const dateDisplayEl = document.getElementById("date");

const p1 = bannerPic.offsetLeft;
const p2 = bannerPic.offsetRight;
const width = bannerPic.width;
let posX, posY;

function isMe(x) {
  let p = ((x - p1) / width) * 100;
  bannerPic.title =
    p <= 34
      ? "Yes, You found me!!"
      : p >= 67
      ? "No, thats Godswill"
      : "No, thats Godsvictory";
}

bannerPic.addEventListener("mouseenter", () => {
  isMe(posX);
});

window.addEventListener("mousemove", (e) => {
  posX = e.clientX;
  posY = e.clientY;
  isMe(posX);
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function displayDateTime() {
  setInterval(() => {
    const date = new Date();
    const curUTCHour = date.getUTCHours(),
      curUTCMinute = date.getUTCMinutes(),
      curUTCSecond = date.getUTCSeconds(),
      curUTCDay = date.getUTCDay(),
      curUTCMonth = date.getUTCMonth(),
      curUTCYear = date.getUTCFullYear();

    const curTime = `${curUTCHour < 10 ? "0" : ""}${curUTCHour}:${
      curUTCMinute < 10 ? "0" : ""
    }${curUTCMinute}:${curUTCSecond < 10 ? "0" : ""}${curUTCSecond}`;

    const curDate = `${curUTCDay} ${months[curUTCMonth - 1]}, ${curUTCYear}`;
    document.querySelector('.year').textContent = curUTCYear;

    dateDisplayEl.textContent = curDate;
    timeDisplayEl.textContent = curTime;
  }, 1000);
}

displayDateTime();
