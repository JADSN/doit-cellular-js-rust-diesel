const stateDeleteTaskPresenter = async (message) => {
    debug(`stateDeleteTaskPresenter()`)
    const model = await stateDeleteTaskModel(message)
    const view = await stateDeleteTaskView(model)
    // AddEvenListener, innerHTML or Call Another State.

    waitForElement({ "selector": "div#div-entryponint-task" }, () => {

        const task = model

        if (task["status"] === "DELETED") {
            stateShowAllTasksPage(currentState, null)
            stateShowCountOfTasks(currentState, null)
        }
    })
}

