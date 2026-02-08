const stories = [
    {
      title: "Our Beginning",
      text: "This is part one of your love story. Replace this with how you met."
    },
    {
      title: "You make every moment Special",
      text: "From going on dates, to chilling at your home. From going to Mandirs together to just staying together and not saying a word but still be in the most comfortable space with each other. From trying to learning new things together to going on lot more trips in the future, you make every moment special"
    },
    {
      title: "Babyy....",
      text: "You are the kindest loving soul, I know till this date and I want to spend more and more time with your goofy ass.  "
    }
  ];
  
  let index = 0;
  
  const titleEl = document.getElementById("story-title");
  const textEl = document.getElementById("story-text");
  const nextBtn = document.getElementById("nextStoryBtn");
  
  nextBtn.addEventListener("click", () => {
    index++;
  
    if (index < stories.length) {
      titleEl.textContent = stories[index].title;
      textEl.textContent = stories[index].text;
    } else {
      document.querySelector(".story").scrollIntoView({ behavior: "smooth" });
      document.querySelector(".proposal").scrollIntoView({ behavior: "smooth" });
    }
  });
  
