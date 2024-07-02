const bannerPic = document.getElementById("banner-pic");
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

console.log(posX, posY);
