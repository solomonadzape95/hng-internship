const bannerPic = document.getElementById("banner-pic");
const timeDisplayEl = document.getElementById("time");
const dateDisplayEl = document.getElementById("date");

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
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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
    document.querySelector(".year").textContent = curUTCYear;

    dateDisplayEl.textContent = days[curUTCDay - 1];
    timeDisplayEl.textContent = curTime;
  }, 1000);
}

displayDateTime();
