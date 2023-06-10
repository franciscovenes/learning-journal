let visibility = false;

document.addEventListener("click", function (e) {
  if (e.target.id === "view-btn") {
    document.querySelectorAll(".hidden").forEach(function (el) {
      el.classList.toggle("visible");
    });
    visibility = !visibility;
    document.getElementById(e.target.id).innerText = visibility
      ? "View Less"
      : "View More";
  } else if (e.target.id === "nav-btn") {
    document.querySelectorAll(".nav-items").forEach(function (el) {
      el.classList.toggle("visible");
    });
  }
});
