const nav = document.getElementsByClassName("navigation");

for (let link of nav) {
    link.addEventListener("click", function handler(e) {
        e.target.classList.toggle("active-nav");
    });
  }