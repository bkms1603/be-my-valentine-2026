document.addEventListener("DOMContentLoaded", () => {
  let noClickCount = 0;
  let yesScale = 1;

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const reactionGif = document.getElementById("reactionGif");
  const sadSound = document.getElementById("sadSound");
  const questionText = document.getElementById("question");

  const happyCat =
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";
  const sadCat =
    "https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif";
  const depressedCat =
    "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif";

  function handleNo() {
    noClickCount++;

    if (noClickCount === 1) {
      reactionGif.src = sadCat + "?v=" + Date.now();
      questionText.innerText = "Oh… that hurts 😿";
    } else {
      reactionGif.src = depressedCat + "?v=" + Date.now();
      questionText.innerText = "I’m officially heartbroken 💔";
    }

    sadSound.currentTime = 0;
    sadSound.play();

    reactionGif.classList.remove("shake");
    void reactionGif.offsetWidth;
    reactionGif.classList.add("shake");

    yesScale += 0.8;
    yesBtn.style.transform = `scale(${yesScale})`;
  }

  noBtn.addEventListener("click", handleNo);

  yesBtn.addEventListener("click", () => {
    window.location.href = "surprise.html";
  });
});
