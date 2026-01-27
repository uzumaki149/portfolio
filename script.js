// ====================
// Theme Toggle
// ====================

const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");

  themeToggleButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});

// ====================
// Project Data
// ====================

const projects = [
  {
    title: "Sample Project One",
    description: "A simple project built using HTML and CSS.",
    details: "This project focuses on semantic HTML and responsive CSS layout."
  },
  {
    title: "Sample Project Two",
    description: "A JavaScript-based interactive feature.",
    details: "This project demonstrates DOM manipulation and event handling."
  }
];

// ====================
// Project Rendering
// ====================

const projectList = document.getElementById("projectList");

if (!projectList) {
  console.error("Project list container not found");
}

const modalOverlay = document.getElementById("modalOverlay");
const modalText = document.getElementById("modalText");
const closeModalButton = document.getElementById("closeModal");

projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;

  const viewButton = document.createElement("button");
  viewButton.textContent = "View Details";

  viewButton.addEventListener("click", () => {
    modalText.textContent = project.details;
    modalOverlay.classList.remove("hidden");
  });

  projectCard.appendChild(projectTitle);
  projectCard.appendChild(projectDescription);
  projectCard.appendChild(viewButton);
  projectList.appendChild(projectCard);
});

// ====================
// Modal Controls
// ====================
closeModalButton.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});
