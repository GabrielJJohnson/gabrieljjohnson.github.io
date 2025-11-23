document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".module-header");
  headers.forEach((header) => {
    const content = header.nextElementSibling;
    content.style.maxHeight = "0px";
    content.style.overflow = "hidden";
    content.style.transition = "max-height 0.4s ease";
    header.style.cursor = "pointer";
    header.addEventListener("click", () => {
      const isOpen = content.style.maxHeight !== "0px";
      if (isOpen) {
        content.style.maxHeight = "0px";
        header.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        header.classList.add("active");
      }
    });
  });
});