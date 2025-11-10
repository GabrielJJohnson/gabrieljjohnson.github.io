document.addEventListener("DOMContentLoaded", () => {
  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach((button) => {
    const content = button.nextElementSibling;
    content.style.maxHeight = "0px";
    content.style.overflow = "hidden";
    content.style.transition = "max-height 0.4s ease";
    button.addEventListener("click", () => {
      const isOpen = content.style.maxHeight !== "0px";
      if (isOpen) {
        content.style.maxHeight = "0px";
        button.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        button.classList.add("active");
      }
    });
  });
});
