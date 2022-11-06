export default function() {
    
    let title = "Item 1";
    let description = "This is a todo item";
    let dueDate = "some date later";
    let priority = "High";

    const itemDom = () => {
        const li = document.createElement('li');
        li.classList.add('todo-item')
        
        const titleElem = document.createElement('p');
        titleElem.textContent = title;
        
        li.appendChild(titleElem);
        return li;
    }

    return {title, description, dueDate, priority, itemDom};
}