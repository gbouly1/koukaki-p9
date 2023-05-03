// création de l'observateur
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("title-animation");
    }
  });
});

// on dit a l'obs quel élément tracker
observer.observe(document.querySelector(".scroll-title"));
