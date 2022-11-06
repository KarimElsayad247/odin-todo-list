import TodoItem from "./TodoItem";

export default function() {
    
    let title = "New project";

    let todoItems = [TodoItem(), TodoItem(), TodoItem()];

    const addTodoItem = () => {
        todoItems.push(TodoItem());
    }

    const getTodoItemsList = () => {
        const itemsList = document.createElement('ul');
        const itemElems = todoItems.map(item => item.itemDom());
        itemsList.replaceChildren(...itemElems);
        return itemsList;
    }

    const replaceWithChangeTitleForm = () => {
        const h1 = document.createElement('h1');
        h1.textContent = "changed";
        const titleDiv = document.querySelector('#main-area-project-title');
        titleDiv.replaceChildren(h1);
    }

    const AddItemButton = () => {
        const button = document.createElement('button');
        button.textContent = "+"
        button.classList.add("add-item-button");
        button.addEventListener('click', addTodoItem);
        return button;
    }

    const TitleElement = () => {
        const div = document.createElement('div');
        div.id = 'main-area-project-title';
        div.addEventListener('click', replaceWithChangeTitleForm);

        const titleElement = document.createElement('h2');
        titleElement.textContent = title;
        
        div.replaceChildren(titleElement);
        return div;
    }

    const ProjectDom = () => {
        const dom = [];
        
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('main-area-header');

        headerDiv.appendChild(TitleElement());
        headerDiv.appendChild(AddItemButton());

        dom.push(headerDiv);
        dom.push(getTodoItemsList());

        return dom;
    }

    const switchToProject = () => {
        const mainArea = document.querySelector('#main-area');
        const content = ProjectDom();
        mainArea.replaceChildren(...content); 
    }

    const project = document.createElement('li');
    project.textContent = title;
    project.classList.add('project');
    project.tabIndex = 0;
    project.addEventListener('click', switchToProject);
    return project;
}