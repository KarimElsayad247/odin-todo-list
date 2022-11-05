export default function() {
    const project = document.createElement('li');
    project.textContent = "New Project";
    project.classList.add('project');
    project.tabIndex = 0;
    return project;
}