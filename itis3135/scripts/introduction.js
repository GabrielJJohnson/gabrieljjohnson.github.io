document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const clearBtn = document.getElementById("clearBtn");
  const addCourseBtn = document.getElementById("addCourseBtn");
  const coursesContainer = document.getElementById("coursesContainer");

  function displaySubmittedData() {
    const formData = new FormData(form);
    const output = document.createElement("section");
    output.id = "submittedIntro";
    output.innerHTML = `
      <h2>Introduction Form</h2>
      <p><strong>Name:</strong> ${formData.get("firstName")} ${
      formData.get("middleName") || ""
    } "${formData.get("nickname") || ""}" ${formData.get("lastName")}</p>
      <p><strong>Acknowledgment:</strong> ${formData.get(
        "ackStatement"
      )} (${formData.get("ackDate")})</p>
      <p><strong>Mascot:</strong> ${formData.get("mascotAdj")} ${formData.get(
      "mascotAnimal"
    )}</p>
      <p><strong>Divider:</strong> ${formData.get("divider")}</p>
      <img src="${URL.createObjectURL(
        formData.get("picture")
      )}" alt="User Image" style="max-width:200px;">
      <p><em>${formData.get("picCaption")}</em></p>
      <p><strong>Statement:</strong> ${formData.get("personalStatement")}</p>
      <ul>
        <li>${formData.get("bullet1")}</li>
        <li>${formData.get("bullet2")}</li>
        <li>${formData.get("bullet3")}</li>
        <li>${formData.get("bullet4")}</li>
        <li>${formData.get("bullet5")}</li>
        <li>${formData.get("bullet6")}</li>
        <li>${formData.get("bullet7")}</li>
      </ul>
      <h3>Courses:</h3>
      <ul>
        ${Array.from(coursesContainer.children)
          .map((course) => {
            const inputs = course.querySelectorAll("input");
            return `<li>${inputs[0].value} ${inputs[1].value} - ${inputs[2].value} (${inputs[3].value})</li>`;
          })
          .join("")}
      </ul>
      <blockquote>"${formData.get("quote")}" — ${formData.get(
      "quoteAuthor"
    )}</blockquote>
      ${
        formData.get("funnyThing")
          ? `<p><strong>Funny Thing:</strong> ${formData.get("funnyThing")}</p>`
          : ""
      }
      ${
        formData.get("shareThing")
          ? `<p><strong>Something to Share:</strong> ${formData.get(
              "shareThing"
            )}</p>`
          : ""
      }
      <h3>Links:</h3>
      <ul>
        <li><a href="${formData.get("link1")}" target="_blank">${formData.get(
      "link1"
    )}</a></li>
        <li><a href="${formData.get("link2")}" target="_blank">${formData.get(
      "link2"
    )}</a></li>
        <li><a href="${formData.get("link3")}" target="_blank">${formData.get(
      "link3"
    )}</a></li>
        <li><a href="${formData.get("link4")}" target="_blank">${formData.get(
      "link4"
    )}</a></li>
        <li><a href="${formData.get("link5")}" target="_blank">${formData.get(
      "link5"
    )}</a></li>
      </ul>
      <button onclick="location.reload()">Reset Form</button>
    `;
    form.replaceWith(output);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      alert("Please fill out all required fields.");
      return;
    }
    displaySubmittedData();
  });

  form.addEventListener("reset", () => {
    setTimeout(() => {
      alert("Form reset to default values.");
    }, 100);
  });

  clearBtn.addEventListener("click", () => {
    form.querySelectorAll("input, textarea").forEach((el) => {
      el.value = "";
    });
  });

  addCourseBtn.addEventListener("click", () => {
    const courseDiv = document.createElement("div");
    courseDiv.className = "course-entry";
    courseDiv.innerHTML = `
      <input type="text" placeholder="Department" required>
      <input type="text" placeholder="Course Number" required>
      <input type="text" placeholder="Course Name" required>
      <input type="text" placeholder="Reason" required>
      <button type="button" class="deleteCourse">Delete</button>
    `;
    coursesContainer.appendChild(courseDiv);

    courseDiv.querySelector(".deleteCourse").addEventListener("click", () => {
      coursesContainer.removeChild(courseDiv);
    });
  });
});