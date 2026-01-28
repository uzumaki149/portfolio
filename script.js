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
// Project Data Array
// ====================

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "My personal website showcasing my projects and skills.",
    tech: "HTML, CSS, JavaScript",
    status: "Completed",
    details:
      "This portfolio features responsive layout, dark mode toggle, dynamic project rendering, and modal-based project details. Built to practice core frontend fundamentals."
  },

  {
  title: "To-Do List Application",
  description: "A task management app with persistent storage.",
  tech: "HTML, CSS, JavaScript, localStorage",
  status: "Completed",
  details:
    "This application allows users to add tasks, mark them as completed, clear all tasks, and persist data using localStorage.",
  link: "https://uzumaki149.github.io/to-do-app/"
}

];

const projectsTitle = document.getElementById("projectsTitle");
projectsTitle.textContent = `Projects (${projects.length})`;


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
  const tech = document.createElement("p");
tech.textContent = "Tech: " + project.tech;

const status = document.createElement("p");
status.textContent = "Status: " + project.status;

projectCard.appendChild(tech);
projectCard.appendChild(status);

  projectCard.appendChild(viewButton);

  if (project.link) {
  const liveLink = document.createElement("a");
  liveLink.href = project.link;
  liveLink.textContent = "Live Demo";
  liveLink.target = "_blank";
  liveLink.style.display = "inline-block";
  liveLink.style.marginTop = "8px";

  projectCard.appendChild(liveLink);
}

  projectList.appendChild(projectCard);
});

// ====================
// Modal Controls
// ====================
closeModalButton.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});
