document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".collapsible");

  buttons.forEach((button) => {
    const box = button.nextElementSibling;

    // Start collapsed
    box.style.display = "none";

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
