const stateShowAllTasksPageView = async (model) => {
    debug(`stateShowAllTasksPageView()`)

    const itemTaskTemplate = id => {
        return `
        <li id="li-task-item-${id}">
            <input class="task-inp-desc" type="text" name="inp-task-description-${id}" id="inp-task-description-${id}">

            <!-- Custom Checkbox -->
            <label class="cb-container">
                <input type="checkbox" name="inp-task-done-${id}" id="inp-task-done-${id}">
                <span class="cb"></span>
            </label>

            <button class="btn-edit" id="btn-edit-${id}">EDIT</button>

            <button class="btn-delete" id="btn-delete-${id}">DELETE</button>
        </li>`
    }

    const tasks = model
    let liElTasks = ''

    tasks.forEach(task => {
        const id = task['id']
        const liElTask = itemTaskTemplate(id)
        liElTasks += liElTask
    });


    const page = `
    <div id="div-add-task" class="div-add-task">
        <input class="border" type="text" name="inp-add-task-description" id="inp-add-task-description"
            placeholder="Description Task">
        <button class="border btn-task-add" class="uk-button uk-button-primary" id="btn-task-add">ADD</button>
    </div>

    <ul id="ul-task-list">${liElTasks}</ul>
    `
    return page
}

