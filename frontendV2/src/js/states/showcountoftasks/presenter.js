const stateShowCountOfTasksPresenter = async (message) => {
    debug(`stateShowCountOfTasksPresenter()`)
    const model = await stateShowCountOfTasksModel(message)
    const view = await stateShowCountOfTasksView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const divTaskCounter = 'div#div-task-counter'

    waitForElement({ "selector": divTaskCounter }, () => {
        document.querySelector(divTaskCounter).innerHTML = view
    })
}

