// Simulated user data (replace with actual data from your backend)
const user = {
  username: "Buddy",
  email: "buddy24@gmail.com",
  assignedProject: {
    name: "Project A",
    manager: "Harry",
    startDate: "01-01-2023",
    listOfMember: "Developer",
  },
  bugs: [
    { id: 1, description: "Bug 1", status: "Open" },
    { id: 2, description: "Bug 2", status: "Open" },
    { id: 3, description: "Bug 3", status: "Closed" },
  ],
};

document.getElementById("username").textContent = user.username;
document.getElementById("email").textContent = user.email;

// Display project information or a message if not assigned to any project
const projectInfoSection = document.getElementById("project-info");
if (user.assignedProject) {
  const project = user.assignedProject;
  projectInfoSection.innerHTML = `
        <h2>Project Information</h2>
        <p>Project Name: ${project.name}</p>
        <p>Manager: ${project.manager}</p>
        <p>Start Date: ${project.startDate}</p>
        <p>List of Member: ${project.listOfMember}</p>
    `;
} else {
  projectInfoSection.innerHTML = "<p>Not assigned to any project.</p>";
}

// Display a list of bugs and allow marking them for closing
const bugListSection = document.getElementById("bug-list");
bugListSection.innerHTML = "<h2>Bug List</h2>";
user.bugs.forEach((bug) => {
  const bugItem = document.createElement("div");
  bugItem.className = "bug-item";
  bugItem.innerHTML = `
        <p>Bug ID: ${bug.id}</p>
        <p>Description: ${bug.description}</p>
        <p>Status: ${bug.status}</p>
        <button class="close-bug-btn">Mark for Closing</button>
    `;
  bugListSection.appendChild(bugItem);
});
