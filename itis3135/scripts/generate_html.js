document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const generateBtn = document.getElementById("generateHtmlBtn");
  const main = document.querySelector("main");
  const header = document.querySelector("h2");
  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  generateBtn.addEventListener("click", () => {
    if (!form) return console.error("Form not found (#introForm).");
    const formData = new FormData(form);
    const firstName = formData.get("firstName") || "";
    const middle = formData.get("middleName") || "";
    const preferred = formData.get("nickname") || "";
    const lastName = formData.get("lastName") || "";
    const divider = formData.get("divider") || "";
    const adj = formData.get("mascotAdj") || "";
    const animal = formData.get("mascotAnimal") || "";
    const imageFile = formData.get("picture");
    const imageName = imageFile && imageFile.name ? imageFile.name : "";
    const caption = formData.get("picCaption") || "";
    const htmlOutput = `
<h2>Introduction HTML</h2>
<h3>${escapeHtml(firstName)} ${
      middle ? escapeHtml(middle.charAt(0) + ".") + " " : ""
    }"${escapeHtml(preferred)}" ${escapeHtml(lastName)} ${escapeHtml(
      divider
    )} ${escapeHtml(adj)} ${escapeHtml(animal)}</h3>
<figure>
  <img src="images/${escapeHtml(imageName)}" alt="Headshot of ${escapeHtml(
      firstName
    )} ${escapeHtml(lastName)}" />
  <figcaption>${escapeHtml(caption)}</figcaption>
</figure>
<ul>
  <li><strong>Personal Background:</strong> ${escapeHtml(
    formData.get("bullet1") || ""
  )}</li>
  <li><strong>Academic Background:</strong> ${escapeHtml(
    formData.get("bullet2") || ""
  )}</li>
  <li><strong>Professional Background:</strong> ${escapeHtml(
    formData.get("bullet3") || ""
  )}</li>
  <li><strong>Technical Skills:</strong> ${escapeHtml(
    formData.get("bullet4") || ""
  )}</li>
  <li><strong>Interests and Hobbies:</strong> ${escapeHtml(
    formData.get("bullet5") || ""
  )}</li>
  <li><strong>Goals and Aspirations:</strong> ${escapeHtml(
    formData.get("bullet6") || ""
  )}</li>
  <li><strong>Fun Fact:</strong> ${escapeHtml(
    formData.get("bullet7") || ""
  )}</li>
</ul>
<p><strong>Personal Statement:</strong> ${escapeHtml(
      formData.get("personalStatement") || ""
    )}</p>
<blockquote>"${escapeHtml(formData.get("quote") || "")}" — ${escapeHtml(
      formData.get("quoteAuthor") || ""
    )}</blockquote>
<h4>Links</h4>
<ul>
  <li><a href="${escapeHtml(formData.get("link1") || "#")}">${escapeHtml(
      formData.get("link1") || ""
    )}</a></li>
  <li><a href="${escapeHtml(formData.get("link2") || "#")}">${escapeHtml(
      formData.get("link2") || ""
    )}</a></li>
  <li><a href="${escapeHtml(formData.get("link3") || "#")}">${escapeHtml(
      formData.get("link3") || ""
    )}</a></li>
  <li><a href="${escapeHtml(formData.get("link4") || "#")}">${escapeHtml(
      formData.get("link4") || ""
    )}</a></li>
  <li><a href="${escapeHtml(formData.get("link5") || "#")}">${escapeHtml(
      formData.get("link5") || ""
    )}</a></li>
</ul>
`;
    header.textContent = "Introduction HTML";
    main.innerHTML = `
      <section>
        <pre><code class="language-html">${escapeHtml(htmlOutput)}</code></pre>
      </section>
    `;
    if (window.hljs) {
      hljs.highlightAll();
    } else {
      console.warn(
        "highlight.js not found — include the CDN link in the <head> if you want syntax highlighting."
      );
    }
  });
});