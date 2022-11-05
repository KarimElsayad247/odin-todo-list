const CreateProjectButton = () => {
    const button = document.createElement('button');
    button.textContent = "+"
    button.id = "add-project-button";
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
    
    sidebar.appendChild(sidebarHeader);

    return sidebar;
}