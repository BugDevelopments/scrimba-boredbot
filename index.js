import { gifUrls } from "./data.js"

console.log(gifUrls)
document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      changeStyle()
    })
})


function changeStyle() {
  document.querySelector("p").classList.add("p-activated")
  const imgEl = document.getElementById("motivational-gif")
  const num = Math.floor(Math.random()*gifUrls.length)
  imgEl.src = gifUrls[num]
  imgEl.style.display = "block"
}