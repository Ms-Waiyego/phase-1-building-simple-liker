// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const init = () => {
  let modal = document.getElementById("modal");
  let modalMessage = document.getElementById("modal-message");  

  let likeElements = document.querySelectorAll(".like-glyph");
 
  for(const like of likeElements){
    like.addEventListener("click",(() => {

      if(like.classList.contains("activated-heart")){
        mimicServerCall()
          .then(() => { 
            like.classList.remove("activated-heart");
            like.innerHTML = EMPTY_HEART;
            alert(`You unliked a post`);

          })
          .catch((err) => {
            modal.classList.remove("hidden");
           modalMessage.innerHTML = err.message;

        setTimeout(()=> {
           modal.classList.add("hidden");
         },3000);

          })
      } else {
        mimicServerCall()
          .then(() => { 
            like.classList.add("activated-heart");
            like.innerHTML = FULL_HEART;
            alert("You liked A post");           
          })
        .catch((err) => {
         modal.classList.remove("hidden")
        modalMessage.innerHTML = err.message;
            
        setTimeout(()=> {
        modal.classList.add("hidden");
            },3000); })
      } }))};}
document.addEventListener("DOMContentLoaded",init);
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
