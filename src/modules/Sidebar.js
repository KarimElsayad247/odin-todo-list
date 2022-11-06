import Project from './Project.js'

export default function() {
    let projects = [Project()]
    
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
        button.classList.add("add-item-button");
        button.addEventListener('click', addNewProject);
        return button;
    }

    const SidebarHeaderTitle = () => {
        const sidebarHeaderTitle = document.createElement('h2');
        sidebarHeaderTitle.textContent = "Projects";
        sidebarHeaderTitle.classList.add("sidebar-header-title");
        return sidebarHeaderTitle;
    }

    const SidebarDom = () => {
        const sidebar = document.createElement('section');
        sidebar.classList.add('sidebar');
     
        const sidebarHeader = document.createElement('div');
        sidebarHeader.id = 'sidebar-header'
    
        const sidebarHeaderTitle = SidebarHeaderTitle();
        const createProjectButton = CreateProjectButton();
    
        sidebarHeader.appendChild(sidebarHeaderTitle);
        sidebarHeader.appendChild(createProjectButton);
        
        const projectsList = document.createElement('ul');
        projectsList.id = 'projects-list'
    
        sidebar.appendChild(sidebarHeader);
        sidebar.appendChild(projectsList);

        return sidebar;
    }

    const debug = () => {
        refreshProjects();
        projects[0].click();
    }

    return [SidebarDom, debug];
}