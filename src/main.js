// document.addEventListener("DOMContentLoaded", () => {
//   const logo = document.getElementById("logo");
//   const clock = logo.querySelector(".clock");
//   let rotated = false;
//   if (!rotated) {
//     logo.addEventListener("click", () => {
//       rotated = true;
//       clock.classList.add("rotate-180", "ease-in");
//       clock.classList.remove("rotate-360")
//       setTimeout(() => {
//         clock.classList.add("rotate-359", "ease-out");
//       }, 1000);
//       rotated = false;
//     });
//   }
// });

// FAQs Accordion
document.querySelectorAll(".click").forEach((item) => {
  item.addEventListener("click", (event) => {
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
