import Project from './Project.js'

export default function() {
    let projects = [Project()]
    
    const addNewProject = () => {
        const project = Project();
        projects.push(project);
        refreshProjects();
    }
    
    const ProjectSidebarEntry = (project, i) => {
        const projectEntry = document.createElement('li');
        projectEntry.textContent = project.title;
        projectEntry.classList.add('project');
        projectEntry.tabIndex = 0;
        projectEntry.dataset.index = i;
        projectEntry.addEventListener('click', switchToProject);
        return projectEntry;
    }

    const switchToProject = (event) => {
        const projectsList = document.querySelector('#projects-list');
        for (const project of projectsList.children) {
            project.classList.remove('active');
        }
        event.target.classList.add('active');
        const projectIndex = event.target.dataset.index;
        projects[projectIndex].displayProject();
    }

    function refreshProjects() {
        const projectsList = document.querySelector('#projects-list');
        const projectElems = projects.map(
            (project, i) => ProjectSidebarEntry(project, i)
        );
        projectsList.replaceChildren(...projectElems);
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
        document.querySelector('#projects-list')
                .firstChild.click();
    }

    return [SidebarDom, debug];
}