const stateUpdateTaskPresenter = async (message) => {
    debug(`stateUpdateTaskPresenter()`)
    const model = await stateUpdateTaskModel(message)
    const view = await stateUpdateTaskView(model)
    // AddEvenListener, innerHTML or Call Another State.

    waitForElement({ "selector": "div#div-entryponint-task" }, () => {

        const task = model

        if (task["status"] === "UPDATED") {
            stateShowAllTasksPage(currentState, null)
        }
    })
}

