document.addEventListener("DOMContentLoaded", () => {
    let counterValue = 0;
    let isPaused = false;
    
    const counter = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const likeButton = document.getElementById("heart");
    const likesList = document.querySelector(".likes");
    const pauseButton = document.getElementById("pause");
    const resumeButton = document.getElementById("resume");
    const buttons = [plusButton, minusButton, likeButton];
  

    function likeCounter() {
        const currentCount = counterValue;
        if (likes[currentCount]) {
          likes[currentCount]++;
          document.getElementById(`like-${currentCount}`).innerText = `${currentCount} has been liked ${likes[currentCount]} times`;
        } else {
          likes[currentCount] = 1;
          const li = document.createElement("li");
          li.setAttribute("id", `like-${currentCount}`);
          li.innerText = `${currentCount} has been liked 1 time`;
          likesList.appendChild(li);
        }
      }
      function pauseCounter() {
        isPaused = true;
        pauseButton.disabled = true;
        resumeButton.disabled = false;
        buttons.forEach(button => {
          button.disabled = true;
        });
        pauseButton.innerText = "resume";
      }
    
      function resumeCounter() {
        isPaused = false;
        pauseButton.disabled = false;
        resumeButton.disabled = true;
        buttons.forEach(button => {
          button.disabled = false;
        });
        pauseButton.innerText = "pause";
      }
    
    
      plusButton.addEventListener("click", incrementCounter);
      minusButton.addEventListener("click", decrementCounter);
      likeButton.addEventListener("click", likeCounter);
      pauseButton.addEventListener("click", pauseCounter);
      resumeButton.addEventListener("click", resumeCounter);
    

    function incrementCounter() {
      if (!isPaused) {
        counterValue++;
        counter.innerText = counterValue;
      }
    }
    function decrementCounter() {
        if (!isPaused && counterValue > 0) {
          counterValue--;
          counter.innerText = counterValue;
        }
      }
      function addComment(comment) {
        const li = document.createElement("li");
        li.innerText = comment;
        commentList.appendChild(li);
        commentSubmit.addEventListener("click", () => {
            const comment = commentInput.value;
            if (comment) {
              addComment(comment);
              commentInput.value = "";
            }
          });
      }
    //   plusButton.addEventListener("click", incrementCounter);
    //   minusButton.addEventListener("click", decrementCounter);
    

    setInterval(incrementCounter, 1000);
  });
  