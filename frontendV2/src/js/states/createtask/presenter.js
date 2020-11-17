const stateCreateTaskPresenter = async (message) => {
    debug(`stateCreateTaskPresenter()`)
    const model = await stateCreateTaskModel(message)
    const view = await stateCreateTaskView(model)
    // AddEvenListener, innerHTML or Call Another State.

    waitForElement({ "selector": "div#div-entryponint-task" }, () => {

        // Render current state
        if (model['status'] === "CREATED") {
            document.querySelector("input#inp-add-task-description").value = ''
            stateShowAllTasksPage(currentState, null)
            stateShowCountOfTasks(currentState, null)
        }
    })
}

