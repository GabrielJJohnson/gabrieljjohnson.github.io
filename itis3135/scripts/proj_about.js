document.addEventListener("DOMContentLoaded", () => {
  const collapsibleButtons = document.querySelectorAll(".collapsible");
  collapsibleButtons.forEach(button => {
    const box = button.nextElementSibling;
    button.addEventListener("click", () => {
      const isOpen = box.style.display === "block";
      if (isOpen) {
        box.style.display = "none";
        button.classList.remove("active");
      } else {
        box.style.display = "block";
        button.classList.add("active");
      }
    });
  });
});