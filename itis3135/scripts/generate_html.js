document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const generateBtn = document.getElementById("generateHtmlBtn");
  const main = document.querySelector("main");
  const header = document.querySelector("h2");
  generateBtn.addEventListener("click", () => {
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const middle = formData.get("middleName") || "";
    const preferred = formData.get("nickname") || "";
    const lastName = formData.get("lastName");
    const divider = formData.get("divider");
    const adj = formData.get("mascotAdj");
    const animal = formData.get("mascotAnimal");
    const image = formData.get("picture") ? formData.get("picture").name : "";
    const caption = formData.get("picCaption");
    const htmlOutput = `
<h2>Introduction HTML</h2>
<h3>${firstName} ${
      middle ? middle.charAt(0) + ". " : ""
    }"${preferred}" ${lastName} ${divider} ${adj} ${animal}</h3>
<figure>
  <img src="images/${image}" alt="Headshot of ${firstName} ${lastName}" />
  <figcaption>${caption}</figcaption>
</figure>
<ul>
  <li><strong>Personal Background:</strong> ${formData.get("bullet1")}</li>
  <li><strong>Academic Background:</strong> ${formData.get("bullet2")}</li>
  <li><strong>Professional Background:</strong> ${formData.get("bullet3")}</li>
  <li><strong>Technical Skills:</strong> ${formData.get("bullet4")}</li>
  <li><strong>Interests and Hobbies:</strong> ${formData.get("bullet5")}</li>
  <li><strong>Goals and Aspirations:</strong> ${formData.get("bullet6")}</li>
  <li><strong>Fun Fact:</strong> ${formData.get("bullet7")}</li>
</ul>
<p><strong>Personal Statement:</strong> ${formData.get("personalStatement")}</p>
<blockquote>"${formData.get("quote")}" — ${formData.get(
      "quoteAuthor"
    )}</blockquote>
<h4>Links</h4>
<ul>
  <li><a href="${formData.get("link1")}">${formData.get("link1")}</a></li>
  <li><a href="${formData.get("link2")}">${formData.get("link2")}</a></li>
  <li><a href="${formData.get("link3")}">${formData.get("link3")}</a></li>
  <li><a href="${formData.get("link4")}">${formData.get("link4")}</a></li>
  <li><a href="${formData.get("link5")}">${formData.get("link5")}</a></li>
</ul>
`;
    header.textContent = "Introduction HTML";
    main.innerHTML = `
      <section>
        <pre><code class="language-html">${escapeHtml(htmlOutput)}</code></pre>
      </section>
    `;
    hljs.highlightAll();
  });
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
});