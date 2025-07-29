/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/


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
  document.querySelector("h4").classList.add("h4-activated")
  const imgEl = document.getElementById("motivational-gif")
  const num = Math.floor(Math.random()*gifUrls.length)
  imgEl.src = gifUrls[num]
  console.log(num)
  console.log(imgEl.src)
  imgEl.style.display = "block"
}