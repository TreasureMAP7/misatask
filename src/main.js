// Carousel

function scrollCarousel(dir) {
  const carousel = document.querySelector(".carousel");
  const slideWidth = carousel.querySelector(".slide").offsetWidth;
  if (dir === 'left') {
    carousel.scrollBy({ left: -slideWidth, behavior: 'smooth'})
  } else {
    carousel.scrollBy({ left: slideWidth, behavior: 'smooth'})
  }
  console.log(carousel.offsetWidth);
  
}

// FAQs Accordion
document.querySelectorAll(".click").forEach((item) => {
  item.addEventListener("click", () => {
    const article = item.nextElementSibling;
    if (article.classList.contains("grid-rows-[0fr]")) {
      article.classList.add("grid-rows-[1fr]");
      article.classList.remove("grid-rows-[0fr]");
    } else {
      article.classList.add("grid-rows-[0fr]");
      article.classList.remove("grid-rows-[1fr]");
    }
    const icon = item.querySelector(".icon");
    if (icon.classList.contains("rotate-0")) {
      icon.classList.add("rotate-90");
      icon.classList.remove("rotate-0");
    } else {
      icon.classList.add("rotate-0");
      icon.classList.remove("rotate-90");
    }
  });
});
