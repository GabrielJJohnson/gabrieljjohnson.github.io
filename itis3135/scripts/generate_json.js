document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const generateBtn = document.getElementById("generateJsonBtn");
  const main = document.querySelector("main");
  const header = document.querySelector("h2");
  generateBtn.addEventListener("click", () => {
    const formData = new FormData(form);
    const jsonData = {
      firstName: formData.get("firstName"),
      preferredName: formData.get("nickname"),
      middleInitial: formData.get("middleName") || "",
      lastName: formData.get("lastName"),
      divider: formData.get("divider"),
      mascotAdjective: formData.get("mascotAdj"),
      mascotAnimal: formData.get("mascotAnimal"),
      image: formData.get("picture") ? formData.get("picture").name : "",
      imageCaption: formData.get("picCaption"),
      personalStatement: formData.get("personalStatement"),
      personalBackground: formData.get("bullet1"),
      professionalBackground: formData.get("bullet3"),
      academicBackground: formData.get("bullet2"),
      subjectBackground: formData.get("bullet4"),
      primaryComputer: "Unspecified",
      courses: [],
      links: [
        { name: "Link 1", href: formData.get("link1") },
        { name: "Link 2", href: formData.get("link2") },
        { name: "Link 3", href: formData.get("link3") },
        { name: "Link 4", href: formData.get("link4") },
        { name: "Link 5", href: formData.get("link5") }
      ]
    };
    header.textContent = "Introduction JSON";
    main.innerHTML = `
      <section>
        <pre><code class="language-json">${JSON.stringify(jsonData, null, 2)}</code></pre>
      </section>
    `;
    hljs.highlightAll();
  });
});