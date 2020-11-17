const stateShowAllTasksPagePresenter = async (message) => {
    debug(`stateShowAllTasksPagePresenter()`)
    const model = await stateShowAllTasksPageModel(message)
    const view = await stateShowAllTasksPageView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const divAllTasks = 'div#div-all-tasks'

    waitForElement({ "selector": divAllTasks }, () => {
        // Render current state
        document.querySelector(divAllTasks).innerHTML = view

        document.querySelector('button#btn-task-add').addEventListener('click', () => {
            stateCreateTask(currentState, document.querySelector("input#inp-add-task-description").value)
        })
    })

    waitForElement({ "selector": "ul#ul-task-list" }, () => {

        //* Update values of elements
        const tasks = model
        tasks.forEach(task => {
            const taskId = task['id']

            //* Description
            const taskDescription = task['description']
            document.querySelector(`input#inp-task-description-${taskId}`).value = taskDescription

            //* Done
            const taskDone = task['done']
            document.querySelector(`input#inp-task-done-${taskId}`).checked = taskDone
        });

        //* Add event listeners to buttons [EDIT|DELETE]

        const buttons = document.querySelectorAll('ul#ul-task-list > li > button')

        buttons.forEach(button => {

            const id = button.getAttribute('id');
            const el = document.getElementById(id)

            const action = getElementActionById(id)

            //* Add event listeners to buttons
            switch (action) {
                case 'edit':
                    el.addEventListener('click', (evt) => {
                        stateUpdateTask(currentState, evt.target.id)
                    })
                    break;

                case 'delete':
                    el.addEventListener('click', (evt) => {
                        el.parentElement.remove()
                        stateDeleteTask(currentState, evt.target.id)
                    })
                    break;

                default:
                    break;
            }

        });
    })
}

