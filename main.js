// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const allHearts = document.querySelectorAll(".like-glyph")

function clickedHearts(event) { // this is what happens when you click
  const selectedHeart = event.target
// get the clicked heart (event.target)
  mimicServerCall("file:///Users/chandlerabril/Development/code/phase-1/phase-1-building-simple-liker/index.html").then(() => {
// if the selectedHeart.innerText == EMPTY_HEART, change it to FULL_HEART and add class activated-heart, else the opposite.
  if (selectedHeart.innerText == EMPTY_HEART) {
    selectedHeart.innerText = FULL_HEART
    selectedHeart.className = "activated-heart"
  } else {
    selectedHeart.innerText = EMPTY_HEART
    selectedHeart.className = ""
  }
  }).catch((error) => {
    document.querySelector("modal")
    modal.className = ""
    modal.innerText = error
    setTimeout(() => modal.className = "hidden", 3000)
  })
}

allHearts.forEach((heart) => heart.addEventListener("click", clickedHearts))

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
