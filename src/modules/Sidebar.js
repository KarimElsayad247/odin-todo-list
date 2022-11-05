import Project from './Project.js'

let projects = []

function addNewProject() {
    const project = Project();
    projects.push(project);
    refreshProjects();
}

function refreshProjects() {
    const projectsList = document.querySelector('#projects-list');
    projectsList.replaceChildren(...projects)
}

const CreateProjectButton = () => {
    const button = document.createElement('button');
    button.textContent = "+"
    button.id = "add-project-button";
    button.addEventListener('click', addNewProject);
    return button;
}

export default function() {
    let sidebar = document.createElement('section');
    sidebar.classList.add('sidebar');
 
    const sidebarHeader = document.createElement('div');
    sidebarHeader.id = 'sidebar-header'

    const sidebarHeaderTitle = document.createElement('h2');
    sidebarHeaderTitle.textContent = "Projects";
    sidebarHeaderTitle.classList.add("sidebar-header-title")
 
    const createProjectButton = CreateProjectButton();

    sidebarHeader.appendChild(sidebarHeaderTitle);
    sidebarHeader.appendChild(createProjectButton);
    
    const projectsList = document.createElement('ul');
    projectsList.id = 'projects-list'

    sidebar.appendChild(sidebarHeader);
    sidebar.appendChild(projectsList);

    return sidebar;
}