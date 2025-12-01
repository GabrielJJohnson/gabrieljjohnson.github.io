document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(
    "#checklist input[type='checkbox']"
  );
  const clearButton = document.getElementById("clear-checklist");

  checkboxes.forEach((box) => {
    const id = box.getAttribute("data-id");
    const saved = localStorage.getItem(`checklist-${id}`);
    if (saved === "true") {
      box.checked = true;
    }

    box.addEventListener("change", () => {
      localStorage.setItem(`checklist-${id}`, box.checked);
    });
  });

  clearButton.addEventListener("click", () => {
    checkboxes.forEach((box) => {
      box.checked = false;
      const id = box.getAttribute("data-id");
      localStorage.removeItem(`checklist-${id}`);
    });

    alert("All progress has been cleared.");
  });
});